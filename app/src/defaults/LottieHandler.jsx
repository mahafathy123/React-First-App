import React from 'react'
import loading from '../assets/lottifiles/loading.json'
import error404 from '../assets/lottifiles/404.json'
import error from '../assets/lottifiles/Connection error.json'
import { useLottie } from "lottie-react";
import { Link } from 'react-router-dom';
export default function LottieHandler({status}) {
     const options={
        animationData:status=='main'?loading:error,
        loop:true
     }
     const{view}=useLottie(options)

  return (
   
    <div className='min-h-[50vh] flex items-center justify-center flex-col gap-2'>
      <div className='w-50 md:w-100'>{view}</div>
      {
       (status=='main')? <p className='text-center'>Loading Your Website</p>:
        <div>
          <p className='text-red-500 text-2xl text center'>SomeThing Went Wrong</p>
          <Link to={'/'}className='text-blue-600 text-lg mt-2 block underline' replace={true}>Go TO Safty</Link>
        </div>
      }
     
    </div>
  )
}
