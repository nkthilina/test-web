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
              {error && <p className="text-red-500 mt-4 -mb-10">{error}</p>}
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
