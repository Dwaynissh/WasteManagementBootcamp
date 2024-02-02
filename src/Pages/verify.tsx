import React from 'react'
import pic from "./assets/envelope 1.png"

const verify = () => {
  return (
    <div className=' w-screen h-screen '>

      <div className='flex justify-center items-center pt-[50px] '>
      <div><div className='flex justify-center items-center'>Email Verification</div><br/>
      <div>Thank you for signing up for a waste management account</div></div>
      </div>
      
<div className='flex justify-center items-center mt-[100px]'>
      <div className='shadow-md w-[70%] h-[100%]  '>

        <div className='flex justify-center items-center'>
      <img src={pic} className='flex justify-center items-center'/>
      </div>

      <div className=' font-medium text-[30px] flex justify-center items-center'>Verify your email address</div><br/>
      <div className='flex justify-center items-center'>Verification has been sent to your email</div><br/>

       <div  className='flex justify-center items-center font-thin'>Click on the link in the email to activate your account</div><br/>
      </div>
      </div>
      

      
    </div>
  )
}

export default verify