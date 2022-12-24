import React from "react";
import { Link } from "react-router-dom";
import LoginBanner from "../../Images/LoginImage2-01.svg";
import Gicon from "../.././Images/Google.png";

const Login = () => {
  return (
    <div className="mt-10 mb-10">
      <div className="flex lg:flex-row flex-col justify-center items-center">
        <div className="lg:w-1/2 flex justify-end lg:mr-8">
          <img src={LoginBanner} alt="" className="w-[500px] rounded-lg" />
        </div>
        <div className="lg:w-1/2">
        <h1 className="font-bold text-primary text-2xl">Login</h1>
          <form className="lg:w-1/2 flex flex-col justify-center">
            <div className="form-control w-full max-w-xs mb-5">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="example@gmail.com"
                className="input input-bordered input-primary w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="*******"
                className="input input-bordered input-primary w-full max-w-xs"
              />
            </div>
            <p className="text-sm mb-5 mt-2 text-primary underline hover:text-pink-300">
              <Link>forgot password?</Link>
            </p>
            <button className="btn btn-primary w-full max-w-xs">Login</button>
            <div className="divider">OR</div>
            <div className="w-full flex justify-center items-center">
              <img src={Gicon} className="w-8 cursor-pointer" alt="" />
            </div>
            <p className="text-center">
              Don't have an account?{" "}
              <Link to={'/register'} className="hover:text-pink-300 text-primary underline">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
