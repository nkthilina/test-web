import React from "react";
import { Link } from "react-router-dom";
import Ellipse01 from "../assets/Ellipse 1.jpg";
import LeftImage from "../assets/left_bottom.jpg";
import RightImage from "../assets/right_top.jpg";

function Welcome() {
  return (
    <div className="w-full h-screen">
      {/* <div className="w-full h-screen flex items-center justify-center">
        <img src={Ellipse01} alt="" className="w-full h-full object-cover" />
        <div className="absolute  left-0 bottom-0">
          <img src={LeftImage} alt="" className="size-60" />
        </div>
        <div className=" absolute right-0 top-0">
          <img src={RightImage} alt="" className="size-60" />
        </div>
      </div> */}
      <div className="relative w-full h-screen flex items-center justify-center">

  <img src={Ellipse01} alt="" className="  w-full h-full object-cover z-10" />
  <div className="absolute left-0 bottom-0">
    <img src={LeftImage} alt="" className="w-60 h-60" />
  </div>
  <div className="absolute right-0 top-0">
    <img src={RightImage} alt="" className="w-60 h-60" />
  </div>
</div>


      <h1>Welcome</h1>
      <Link to={"/contacts/new"}>Add your contact</Link>
      <br />
      <Link to={"/login"}>Log Out</Link>
    </div>
  );
}

export default Welcome;
