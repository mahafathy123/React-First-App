import Input from "./Input";
import { useForm } from "react-hook-form";
import signInSchema from "../../Validation/SignInSchema";
import{zodResolver} from '@hookform/resolvers/zod'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useAuth from "../../Zustand/AuthSlice";
import { Bounce, toast } from "react-toastify";
import { FaSpinner } from "react-icons/fa6";

export default function SignInForm() {
  const { handleSubmit, register ,formState:{errors :formErrors}} = useForm({
    resolver:zodResolver(signInSchema)
});
  const navigate=useNavigate()
  const[err,setErr]=useState(null)
  const handleSignIn=useAuth(s => s.handleSignIn)
  const isLoadingSignIn=useAuth(s => s.isLoadingSignIn)
  const formSubmitHandler =async(data) => {
     const res=await(handleSignIn(data));
    if(res.success){
        setErr(null)
        toast.success("🦄 Welcome Back! Lgged in Successfully.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
});
        navigate('/')
    }else{
      toast.error('SomeThing Went Wrong Please Try Again')
      setErr(res.message)

    }
  };

  return (
    <form
      onSubmit={handleSubmit(formSubmitHandler)}
      className="w-full flex flex-col gap-4 sm:w-100 md:w-175 lg:w-200 xl:w-250 border-gray-300 shadow rounded py-7 px-8 my-7 mx-auto border-2"
    >
      <p className="text-(--second-color) font-bold text-xl">
        Welcome Back , Complete Login :
      </p>

      <div className="flex flex-col gap-4 px-3 mt-5">
         

        <Input
          register={register} 
          label={'Email Address'}
          error={formErrors.email}
          helperText={formErrors.email?.message}
          name={"email"}
          type="email"
        />

        <Input
          register={register} 
          label={'Password'}
          error={formErrors.password}
          helperText={formErrors.password?.message}
          name={"password"}
          type="password"
        />

          {
          err &&<div className="py-3 text-lg text-red-700 font-semibold bg-red-100 rounded border text-center capitalize">{err}</div>
        }

        <button 
        disabled={isLoadingSignIn}
        className="py-2 cursor-pointer duration-300 hover:bg-(--main-color) hover:text-(--secondary-color) px-6 bg-(--secondary-color) text-white w-max mx-auto text-lg border-2 border-(--secondary-color) rounded">
          {
           isLoadingSignIn?(<div className="flex items-center gap-2">
             Loading <FaSpinner className="animate-spin"/>
           </div>):
           ("Confirm")
           }
          Submit
        </button>
      </div>
    </form>
  );
}