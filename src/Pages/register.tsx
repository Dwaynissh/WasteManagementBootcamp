import React from 'react'
import { FcGoogle } from "react-icons/fc";
import pics from "./assets/06c275cd-5e3a-44ae-b918-43b1da5f7d3d.jpg"

const register = () => {
  return (
    <div className="w-full h-screen grid md:grid-cols-2 transition-all duration-300">
    {/* <Toaster position="top-center" reverseOrder={false} /> */}

    <div className="bg-gray-100 flex justify-center items-center">
      <div className="w-[87%] h-[80%]  flex justify-center items-center flex-col">
        <div className="w-full text-[35px] italic text-[#151515] font-bold">
          🎒Waste Management{" "}
          <span className="text-[35px] text-[#e2cc30] font-bold">...</span>
        </div>
        <div className="w-full text-[50px] text-[#151515] font-semibold">
          Register
        </div>
        <form
          action=""
        //   onSubmit={handleSubmit}
          className="w-full mt-[40px] flex justify-center items-start flex-col"
        >
          <div className="w-full flex justify-start flex-col">
            <label htmlFor="" className="w-full mb-4 font-medium">
              Email
            </label>
            <input
              placeholder="Enter your email"
              className="w-[90%] h-[60px]"
              // type="email"
            //   required
            //   value={email}
            //   onChange={(e: any) => {
            //     setEmail(e.target.value);
            //   }}
            />

            <label  htmlFor="" className=" mb-4 font-medium w-full mt-4">Password</label>
            <input
            placeholder="Enter your password"
            className="w-[90%] h-[60px]"
            ></input>

<label  htmlFor="" className=" mb-4 font-medium w-full mt-4">Comfirm password</label>
            <input
            placeholder="Comfirm your password"
            className="w-[90%] h-[60px]"
            ></input>
          </div>

          <div className='flex justify-center items-center mt-4 w-[100%] h-[40px]'>
            <div className='flex justify-center items-center w-[20%] h-[40px]  rounded-md  bg-[#111b21]'>
              <div className='font-bold text-[25px] text-[white]'>Login</div>
              </div>
            </div>
            
          <div className="w-full">
            {/* <button
              className="w-[90%] h-[50px] text-[14px] bg-green-400 mb-7 flex content-center"
            //   icon={loading && <ClipLoader color="white" size={18} />}
            />Submit<button/> */}
          </div>
        </form>
        {/* Google Area */}
        <div className="w-full mb-7 ">
          <div className="w-[90%] h-[50px] shadow-md flex justify-center items-center gap-3  text-red-500 rounded-md transition-all duration-300 font-medium mt-4">
            <div className="font-bold text-[25px]">
              <FcGoogle />
            </div>
            <div className="text-black ">Continue with Google</div>
          </div>
          <div className="flex flex-col"></div>
        </div>
        <div className="w-full">
          <div>
            Already have an account? &nbsp; Login{" "}
            {/* <Link to="/login"> */}
              <span className="font-semibold text-[#151515] cursor-pointer">
                Here
              </span>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </div>
    <div className="hidden w-full h-full  md:flex justify-center items-center">
      <div className="w-full h-[80%] flex justify-center items-center">
        <img
          src={pics }
          alt=""
          className="w-[100%] h-[600px] object-contain"
        />
      </div>
    </div>
  </div>
  )
}

export default register