import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaShoppingCart, FaTimes } from "react-icons/fa";
// import {
//   MdKeyboardArrowDown,
//   MdKeyboardArrowUp,
//   MdOutlineVerifiedUser,
//   MdOutlineElectricBike,
//   MdOutlineStore,
// } from "react-icons/md";
import logo from "../../assets/zero_no_clean-removebg-preview.png";
import GlobalBtn from "../ReUsables/GlobalBtn";

const Header = () => {
  const [drop, setDrop] = useState<boolean>(false);
  const [toggle2, setToggle2] = useState<boolean>(false);

  const toggleFunction2 = () => {
    setToggle2(!toggle2);
  };

  return (
    <div>
      <div className="h-[70px] w-full flex justify-center items-center  fixed top-0 z-10 bg-gray-100">
        <div className="h-[90%] w-[85%] flex justify-between items-center">
          <div className="flex items-center gap-[150px]">
            <div className="">
              <img src={logo} alt="" className="w-[150px] h-[65px]" />
            </div>
            <div className="hidden items-center text-[18px] gap-[20px] text-[rgb(1,124,78)] md:flex">
              <nav>Services</nav>
              <nav>About</nav>
              <nav>Contact</nav>
            </div>
          </div>

          <div className="flex justify-center items-center gap-3">
            <div
              className="text-[18px] font-bold cursor-pointer relative md:hidden"
              onClick={() => {
                setDrop(!drop);
              }}
            >
              {drop ? (
                <FaTimes
                  className="text-[30px]"
                  onclick={() => {
                    setDrop(true);
                  }}
                />
              ) : (
                <AiOutlineMenu
                  onclick={() => {
                    setDrop(false);
                  }}
                  className="text-[30px]"
                />
              )}
            </div>
            {drop ? (
              <div className="md:hidden w-full h-[90vh] bg-white text-black absolute top-[60px] right-[0] flex justify-center items-center">
                <div className="w-[90%] h-[90%] bg-black"></div>
              </div>
            ) : null}
            <div>
              <FaShoppingCart className="text-[rgb(1,124,78)]" />
            </div>
            <GlobalBtn
              text="Register"
              onClick={toggleFunction2}
              className="md:block hidden py-3 px-5 bg-[rgb(1,124,78)] cursor-pointer text-white justify-center items-center"
            ></GlobalBtn>
            {toggle2 ? (
              <div className="w-[280px] h-[200px] hidden bg-white bxs flex justify-center items-center rounded-xl absolute top-[60px] right-[20px] md:block">
                <div className="h-[80%] w-[94%]  flex justify-center items-start gap-10">
                  <div className="h-[100%] w-[90%] flex justify-center items-center flex-col">
                    {" "}
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
