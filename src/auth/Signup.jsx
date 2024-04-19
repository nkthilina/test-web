import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import PasswordInput from "../../components/PasswordInput";
import { validateEmail } from "../../utils/helper";
import BgLogin from "../assets/bg_login.jpg";
import BgLoginEllipse from "../assets/Bg_Ellipse_login_register.png";
import Logo from "../assets/02 1.png";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }
    if (!password) {
      setError("Please enter a password");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setError("");

    axios
      .post("http://localhost:3001/register", { email, password })
      .then((res) => {
        console.log(res);
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      

      {/* testing */}
      <div className="absolute z-10  w-full h-screen font-poppins">
        <div className="w-full h-screen relative flex">
          <img
            src={BgLoginEllipse}
            alt=""
            className="w-3/5 h-screen absolute left-0 z-20"
          />
          <img
            src={BgLogin}
            alt=""
            className="w-1/2 h-full absolute right-0 object-cover z-10"
          />
        </div>
        <div className=" items-center justify-between grid grid-cols-2">
          <div className="absolute  left-20 xl:left-10 2xl:left-20 top-20 xl:top-10 2xl:top-40 z-30 xl:m-20 ">
            <div className="text-white ">
              <h1 className="text-white font-bold text-5xl capitalize">
                Register Now!
              </h1>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mt-10 grid grid-rows-3 grid-flow-col gap-6">
                <input
                  type="email"
                  placeholder="e-mail"
                  className="rounded-full py-1.5 px-5 text-primary"
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  value={email}
                />
                <PasswordInput
                  placeholder="password"
                  className="rounded-full py-1.5 px-5 text-primary"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                <input
                  type="password"
                  className="rounded-full py-1.5 px-5 text-primary"
                  placeholder="confirm password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              {error && <p className="text-red-500 mt-3 -mb-9">{error}</p>}
              <div className="text-white mt-12 ">
                <button className="border rounded-full border-solid my-auto py-1 px-8 text-white text-normal">
                  register
                </button>
              </div>
            </form>
            <Link to="/login" className="underline text-white flex mt-16 items-center">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4 "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>              
              <span>&nbsp; Back to login</span>
            </Link>
          </div>
          <div className="absolute right-24 xl:right-48 2xl:right-60 top-1/3 xl:top-1/3 z-30 ">
            <div className=" flex items-center ">
              <img src={Logo} alt="" className="w-9 h-8" />
              <span className="font-semibold text-3xl text-primary">twc</span>
            </div>
            <div className="text-primary grid grid-rows-2 grid-flow-col">
              <span className="font-bold text-5xl">contacts</span>
              <span className="font-semibold text-4xl">portal</span>
            </div>
          </div>
        </div>
      </div>
      {/* end testing */}
    </div>
  );
}

export default Signup;

