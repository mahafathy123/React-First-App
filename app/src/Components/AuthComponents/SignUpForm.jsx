import Input from "./Input";
import GenderRadioGroup from "./GenderRadioGroup";
import { useForm } from "react-hook-form";
import signUpSchema from "../../Validation/SignUpSchema";
import{zodResolver} from '@hookform/resolvers/zod'
import useAuth from "../../Zustand/AuthSlice";
import { FaSpinner } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast ,Bounce} from "react-toastify";

export default function SignUpForm() {
  const { handleSubmit, register ,formState:{errors :formErrors}} = useForm({
    resolver:zodResolver(signUpSchema)
});
  const navigate=useNavigate()
  const[err,setErr]=useState(null)
  const handleSignUp=useAuth(s => s.handleSignUp)
  const isLoadingSignUp=useAuth(s => s.isLoadingSignUp)
  const formSubmitHandler =async(data) => {
    const res=await(handleSignUp(data));
    if(res.success){
        setErr(null)
        toast.success("🦄 Welcome aboard! Your account has been created successfully", {
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
        navigate('/sign-in')
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
        Welcome User , Enter Your Data :
      </p>

      <div className="flex flex-col gap-4 px-3 mt-5">
        <div className="flex gap-4">
          <Input
            register={register}
            label={'First Name'}
            error={formErrors.firstName}
            helperText={formErrors.firstName?.message}
            name={'firstName'}
            type="text"
          />
          <Input
            register={register}
            label={'Last Name'}
            error={formErrors.lastName}
            helperText={formErrors.lastName?.message}
            name={'lastName'}
            type="text"
          />
        </div>

        <Input
          register={register} 
          label={'Phone number'}
          error={formErrors.phone}
          helperText={formErrors.phone?.message}
          name={'phone'}
          type="number"
        />

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

        <Input
          register={register}
          label={'Confirm-Password'}
          error={formErrors.confirmPassword}
          helperText={formErrors.confirmPassword?.message}
          name={"confirmPassword"}
          type="password"
        />

        <GenderRadioGroup error={false} register={register} formErrors={formErrors}/>

        {
          err &&<div className="py-3 text-lg text-red-700 font-semibold bg-red-100 rounded border text-center capitalize">{err}</div>
        }

        <button 
        disabled={isLoadingSignUp}
        className="py-2 cursor-pointer duration-300 hover:bg-(--main-color) hover:text-(--secondary-color) 
        px-6 bg-(--secondary-color) text-white w-max mx-auto text-lg
         border-2 border-(--secondary-color) rounded">
          {
            isLoadingSignUp?(<div className="flex items-center gap-2">
              Loading <FaSpinner className="animate-spin"/>
            </div>):
            ("Confirm")}
          Submit
        </button>
      </div>
    </form>
  );
}