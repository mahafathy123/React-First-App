import React, { useEffect } from 'react'
import { Suspense,lazy } from 'react'
import{createBrowserRouter,RouterProvider} from 'react-router-dom'
import LottieHandler from './defaults/LottieHandler.jsx'
import {ToastContainer,Bounce} from 'react-toastify'
import useAuth from './Zustand/AuthSlice.js'
import CartPage from './Pages/Cart/CartPage.jsx'

const SignIn=lazy(()=>import('./Pages/Auth/SignIn.jsx'));
const SignUp=lazy(()=>import('./Pages/Auth/SignUp.jsx'));
const Layout=lazy(()=>import('./Layout/Layout'))
const Home=lazy(()=>import('../src/Pages/Home/Home.jsx'))
const Shop=lazy(()=>import('../src/Pages/Shop/Shop.jsx'))
const WishlistPage=lazy(()=>import('./Pages/WishlistPage/WishlistPage.jsx'))
export default function App() {
  const initializeAuthOnApp=useAuth(s =>s.initializeAuthOnApp)
  useEffect(()=>{
    const recordUser=initializeAuthOnApp()
    return ()=>recordUser

  },[initializeAuthOnApp])
  const route=createBrowserRouter([
    {
      path:'/',
      element:<Suspense fallback={<LottieHandler status={'main'}/>}>
        <Layout/>
        </Suspense>,
      children:[
        {index:true, element:(<Suspense fallback={<LottieHandler status={'page'}/>}><Home/></Suspense>)},
        {path:'sign-in', element:(<Suspense fallback={<LottieHandler status={'page'}/>}><SignIn/></Suspense>)},
        {path:'sign-up', element:(<Suspense fallback={<LottieHandler status={'page'}/>}><SignUp/></Suspense>)},
        {path:'shop', element:(<Suspense fallback={<LottieHandler status={'page'}/>}><Shop/></Suspense>)},
        {path:'products/:category?', element:(<Suspense fallback={<LottieHandler status={'page'}/>}><Shop/></Suspense>)},
        {path:'WishlistPage', element:(<Suspense fallback={<LottieHandler status={'page'}/>}><WishlistPage/></Suspense>)},
        {path:'cart', element:(<Suspense fallback={<LottieHandler status={'page'}/>}><CartPage/></Suspense>)}
        
        
      ],
      errorElement:<LottieHandler status={'error'}/>
    }
  ])
  return (
    <main className='min-h-screen flex flex-col'>
   <RouterProvider router={route}/>
   <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
   </main>
  )
}
