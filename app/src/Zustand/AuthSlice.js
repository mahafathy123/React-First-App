import { create } from "zustand"
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged
} from "firebase/auth"
import { db, firebaseAuth } from '../FireBase/connect'
import { getDoc, setDoc, doc } from "firebase/firestore"

const useAuth = create((set, get) => ({
    isLoadingSignUp: false,
    isLoadingSignIn: false,
    currentUser: null,
    isLoadingCurrentUser: true,

    handleSignUp: async (data) => {
        set({ isLoadingSignUp: true })
        try {
            const {phone, gender, email, password } = data
            const userData = await createUserWithEmailAndPassword(firebaseAuth, email, password)
            const id = userData.user.uid
            const firstname=data.firstname || data.firstName ||''
            const lastname=data.lastname || data.lasttName ||''
            const userPayload = {
                id,
                userName: (firstname + ' ' + lastname).trim()||email.split('@')[0],
                email,
                password,
                gender,
                phone,
                createdAt: new Date()
            }

            await setDoc(doc(db, 'users', id), userPayload)
           
            set({ currentUser: userPayload })

            return { success: true }
        } catch (error) {
            console.log(error.message)
            return { success: false, message: error.message || "SomeThing Went Wrong" }
        } finally {
            set({ isLoadingSignUp: false })
        }
    },

    handleSignIn: async (data) => {
        set({ isLoadingSignIn: true })
        try {
            const { email, password } = data
            const userCredential = await signInWithEmailAndPassword(firebaseAuth, email, password)
                       
            await get().fetchUserData(userCredential.user.uid)

            return { success: true }                
        } catch (error) {            
            return { 
                success: false,
                message: error.message || "InValid Email Or Password" 
            }
        } finally {
            set({ isLoadingSignIn: false })
        }
    },

    fetchUserData: async (id) => {
        try {
            const userData = await getDoc(doc(db, 'users', id))
            if (userData.exists()) {
                set({ currentUser: userData.data() })
            }
        } catch (error) {
            console.log(error.message)
        }
    },

    initializeAuthOnApp: () => {
        const recordData = onAuthStateChanged(firebaseAuth, async (user) => {
            if (user) {
                await get().fetchUserData(user.uid)
            } else {
                set({ currentUser: null })
            }
            set({ isLoadingCurrentUser: false })
        })

        return recordData
    }
}))

export default useAuth
