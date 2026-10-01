import { initializeApp } from "firebase/app";
import{getAuth} from"firebase/auth"
import{getFirestore} from"firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyDqPwntWATml1oJePiI2s911QXEQRORZXM",
  authDomain: "app-data-c12b6.firebaseapp.com",
  projectId: "app-data-c12b6",
  storageBucket: "app-data-c12b6.firebasestorage.app",
  messagingSenderId: "922865164780",
  appId: "1:922865164780:web:6b3b3465d217d20d3020c9"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth=getAuth(app)
export const db=getFirestore(app)