import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import PasswordInput from "../../components/PasswordInput";
import { validateEmail } from "../../utils/helper";
import BgLogin from "../assets/bg_login.jpg";
import BgLoginEllipse from "../assets/Bg_Ellipse_login_register.png";
import Logo from "../assets/02 1.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }
    if (!password) {
      setError("Please enter your password");
      return;
    }
    setError("");

    axios
      .post("http://localhost:3001/login", { email, password })
      .then((res) => {
        console.log(res);
        if (res.data === "Success") {
          navigate("/");
        }
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="bg-yellow-400 h-screen overflow-hidden flex items-center justify-center">
        <div className="bg-white lg:w-5/12 md:6/12 w-10/12 shadow-3xl">
          <div className="bg-gray-800 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full p-4 md:p-8">
            <svg width={32} height={32} viewBox="0 0 24 24" fill="#FFF">
              <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
            </svg>
          </div>
          <form onSubmit={handleSubmit} className="p-12 md:p-24">
            <div className="flex items-center text-lg mb-6 md:mb-8">
              <svg className="absolute ml-3" width={24} viewBox="0 0 24 24">
                <path d="M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z" />
              </svg>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
                className="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full"
                placeholder="email"
                value={email}
              />
            </div>
            <div className="flex items-center text-lg mb-6 md:mb-8">
              <svg className="absolute ml-3" viewBox="0 0 24 24" width={24}>
                <path d="m18.75 9h-.75v-3c0-3.309-2.691-6-6-6s-6 2.691-6 6v3h-.75c-1.24 0-2.25 1.009-2.25 2.25v10.5c0 1.241 1.01 2.25 2.25 2.25h13.5c1.24 0 2.25-1.009 2.25-2.25v-10.5c0-1.241-1.01-2.25-2.25-2.25zm-10.75-3c0-2.206 1.794-4 4-4s4 1.794 4 4v3h-8zm5 10.722v2.278c0 .552-.447 1-1 1s-1-.448-1-1v-2.278c-.595-.347-1-.985-1-1.722 0-1.103.897-2 2-2s2 .897 2 2c0 .737-.405 1.375-1 1.722z" />
              </svg>
              {/* <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                id="password"
                className="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full"
                placeholder="Password"
                value={password}
              /> */}
              <PasswordInput
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full"
              />
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <button className="bg-gradient-to-b from-gray-700 to-gray-900 font-medium p-2 md:p-4 text-white uppercase w-full">
              Login
            </button>
          </form>
          <Link
            to={"/register"}
            className="bg-gradient-to-b from-gray-700 to-gray-900 font-medium p-2 md:p-4 text-white uppercase w-full"
          >
            Sign In
          </Link>
        </div>
      </div>

      

      {/* testing */}
      <div className="absolute z-10  w-full h-screen">
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
          <div className="absolute  left-20 xl:left-10 2xl:left-20 top-36 xl:top-20 2xl:top-40 z-30 xl:m-20 ">
            <div className="text-white ">
              <h1 className="text-white font-bold text-5xl">Hi there,</h1>
              <p className="text-xl mt-5">
                Welcome to our <br /> contacts portal
              </p>
            </div>
            <form  onSubmit={handleSubmit}>
              <div className="mt-10 grid grid-rows-2 grid-flow-col gap-6">
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
              </div>
              {error && <p className="text-red-500">{error}</p>}
              <div className="text-white mt-16 ">
                <button
                  className="border rounded-full border-solid my-auto py-1 px-8 text-white text-normal"
                >
                  login
                </button>
                <span className="mx-5">or</span>
                <Link to="/register" className="underline">
                  Click here to register
                </Link>
              </div>
            </form>
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

export default Login;
