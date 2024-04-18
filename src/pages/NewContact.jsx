import React, { useState } from "react";
import Ellipse01 from "../assets/Ellipse 1.png";
import LeftImage from "../assets/left_bottom.jpg";
import RightImage from "../assets/right_top.jpg";
import Logo from "../assets/02 1.png";
import LogOut from "../assets/bx_log-out-circle.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function NewContact() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [gender, setGender] = useState();
  const [phone, setPhone] = useState();
  const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/createUsers", {
        name,
        email,
        gender,
        phone,
      })
      .then((res) => {
        console.log(res);
        navigate("/contacts");
      })
      .catch((err) => console.log(err));
  };

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
        <div className="absolute z-10 mx-28 xl:mx-40">
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
          <h1 className="text-white capitalize font-bold text-5xl mt-20">
            New Contact
          </h1>
          <div className="mt-14">
            <form onSubmit={Submit}>
              <div className="mt-10 grid grid-rows-2 grid-flow-col gap-6">
                <div className="flex space-x-5 ">
                  <input
                    type="text"
                    placeholder="full name"
                    className="rounded-full py-1.5 px-5 text-primary w-1/2 xl:w-96 2xl:w-full"
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    type="email"
                    placeholder="e-mail"
                    className="rounded-full py-1.5 px-5 text-primary w-1/2 xl:w-96 2xl:w-full"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="flex justify-between space-x-5">
                  <input
                    type="text"
                    placeholder="phone number"
                    className="rounded-full py-1.5 px-5 text-primary w-1/2 xl:w-96 2xl:w-full"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <div className="flex my-1 text-white  w-1/2 xl:w-96 2xl:w-full justify-between mx-5 pl-5">
                    <label htmlFor="">gender</label>
                    <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                      <input
                        className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-white before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-white checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-white checked:after:bg-white checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-white checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-white dark:checked:border-white dark:checked:after:border-white dark:checked:after:bg-white dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-white dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                        type="radio"
                        name="gender"
                        value="Male"
                        id="radioDefault02"
                        // defaultChecked
                        onChange={(e) => setGender(e.target.value)}
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
                        className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-white before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-white checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-white checked:after:bg-white checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-white checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-white dark:checked:border-white dark:checked:after:border-white dark:checked:after:bg-white dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-white dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                        type="radio"
                        name="gender"
                        value="Female"
                        id="radioDefault01"
                        onChange={(e) => setGender(e.target.value)}
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
              </div>
              <div className="mt-20">
                <button className="border rounded-full border-solid my-auto py-1 px-8 text-white text-normal">
                  add your first contact
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* end form */}
        <div className="absolute z-10 right-14 bottom-12 ">
          <Link
            to="/login"
            className="underline text-white font-normal text-2xl flex items-center gap-4"
          >
            <img src={LogOut} alt="" className="w-[43px] h-[43px] " />
            <span>logout</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NewContact;
