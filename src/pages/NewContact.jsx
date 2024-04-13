import React from "react";
import Ellipse01 from "../assets/Ellipse 1.png";
import LeftImage from "../assets/left_bottom.jpg";
import RightImage from "../assets/right_top.jpg";
import Logo from "../assets/02 1.png";
import TWC_Text from "../assets/TWC_Logo_Revamp_2021 1.png";
import ContactsPortal from "../assets/contacts portal.png";
import LogOut from '../assets/bx_log-out-circle.png'
import { Link } from "react-router-dom";

function NewContact() {
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

        {/* logo */}
        <div className="">
          <div className="absolute z-10 flex left-10 top-10">
            <img src={Logo} alt="" className="" />
            <img src={TWC_Text} alt="" className="" />
          </div>
          <div className="absolute z-10 flex left-16 top-16">
            <img src={ContactsPortal} alt="" className="" />
          </div>
        </div>
        {/* end logo */}

        {/* form */}
        <div className="absolute z-10 mt-60 m-40">
          <h1 className="text-white capitalize">New Contact</h1>
          <div>
            <form action="">
              <div>
                <input type="text" placeholder="full name" />
                <input type="email" placeholder="e-mail" />
              </div>
              <div className="flex">
                <input type="text" placeholder="phone number" />
                <div className="flex">
                  <label htmlFor="">gender</label>
                  <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                    <input
                      className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                      type="radio"
                      name="flexRadioDefault"
                      id="radioDefault02"
                      defaultChecked
                    />
                    <label
                      className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                      htmlFor="radioDefault02"
                    >
                      male
                    </label>
                  </div>
                  <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                    <input
                      className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                      type="radio"
                      name="flexRadioDefault"
                      id="radioDefault01"
                    />
                    <label
                      className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                      htmlFor="radioDefault01"
                    >
                      female
                    </label>
                  </div>
                  
                </div>
              </div>
              <div>
                <Link>add your first contact</Link>
              </div>
            </form>
          </div>
        </div>
        {/* end form */}
        <div className="absolute z-10 right-14 bottom-12 flex text-center justify-items-center">
          <img src={LogOut} alt="" className="w-[43px] h-[43px]"/>
          <Link to="/login" className="underline text-white font-normal ">logout</Link>
        </div>
      </div>{" "}
    </div>
  );
}

export default NewContact;
