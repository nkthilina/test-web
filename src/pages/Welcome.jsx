import React from "react";
import { Link } from "react-router-dom";
import Ellipse01 from "../assets/Ellipse 1.png";
import LeftImage from "../assets/left_bottom.jpg";
import RightImage from "../assets/right_top.jpg";
import Logo from "../assets/02 1.png";
import LogOut from "../assets/bx_log-out-circle.png";

function Welcome() {
  return (
    <div className="w-full h-screen relative">
      <div className="relative w-full h-screen flex ">
        {/* bg image */}
        <img
          src={Ellipse01}
          alt=""
          className="  w-full h-full object-cover z-10"
        />
        <div className="absolute left-0 bottom-0">
          <img src={LeftImage} alt="" className="w-60 h-60" />
        </div>
        <div className="absolute right-0 top-0">
          <img src={RightImage} alt="" className="w-60 h-60" />
        </div>
        {/* end bg image */}

        {/* form */}
        <div className="absolute z-10  2xl:mt-16- lg:mx-36 mx-24">
          {/* logo */}
          <div className="lg:mt-20">
            <div className=" flex items-center ">
              <img src={Logo} alt="" className="w-7 h-6" />
              <span className="font-semibold text-2xl text-white">twc</span>
            </div>
            <div className="text-white grid grid-rows-2 grid-flow-col">
              <span className="font-bold text-3xl">contacts</span>
              <span className="font-semibold text-2xl">portal</span>
            </div>
          </div>
          {/* end logo */}

          <div className="xl:mt-28 2xl:mt-40 lg:mt-20">
            <h1 className="text-white capitalize font-bold text-5xl">
              Welcome,
            </h1>
            <div className="my-10">
              <h2 className="text-white text-3xl">
                This is where your contacts will live. Click the button below to
                add a new contact.
              </h2>
            </div>
            <div>
              <Link
                to="/contacts/new"
                className="border rounded-full border-solid my-auto py-1 px-8 text-white text-normal"
              >
                add your first contact
              </Link>
            </div>
          </div>
        </div>
        {/* end form */}
        <div className="absolute z-10 right-14 bottom-12 ">
          <Link to="/login" className="underline text-white font-normal text-2xl flex items-center gap-4">
          <img src={LogOut} alt="" className="w-[43px] h-[43px] " />
            <span>logout</span>
          </Link>
        </div>
        
      </div>
    </div>
  );
}

export default Welcome;
