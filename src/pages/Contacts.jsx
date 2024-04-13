import React from 'react'
import Ellipse01 from "../assets/Ellipse 1.png";
import LeftImage from "../assets/left_bottom.jpg";
import RightImage from "../assets/right_top.jpg";
import Logo from "../assets/02 1.png";
import TWC_Text from "../assets/TWC_Logo_Revamp_2021 1.png";
import ContactsPortal from "../assets/contacts portal.png";
import LogOut from '../assets/bx_log-out-circle.png'
import { Link } from "react-router-dom";


function Contacts() {
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
        <div className='flex justify-between'>
          <h1 className="text-white capitalize">Contacts</h1>
          <Link to="/contacts/new" >add new contact</Link>
        </div>
          <div>


          </div>
        </div>
        {/* end form */}
        <div className="absolute z-10 right-14 bottom-12 flex text-center justify-items-center">
          <img src={LogOut} alt="" className="w-[43px] h-[43px]"/>
          <Link to="/login" className="underline text-white font-normal ">logout</Link>
        </div>
      </div>{" "}
    </div>  )
}

export default Contacts
