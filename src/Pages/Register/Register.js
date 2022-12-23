import React from "react";
import { Link } from "react-router-dom";
import LoginBanner from "../.././Images/LoginImage1-01.svg";
import Gicon from "../.././Images/Google.png";

const Register = () => {
  return (
    <div className="flex lg:flex-row flex-col justify-center items-center mt-10 mb-10">
        <div className="lg:w-1/2 flex justify-end">
          <img src={LoginBanner} alt="" className="w-[500px] rounded-lg" />
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <form className="lg:w-1/2">
            <div className="form-control w-full max-w-xs mb-2">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="example"
                className="input input-bordered input-primary w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs mb-2">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="example@gmail.com"
                className="input input-bordered input-primary w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs mb-5">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="*******"
                className="input input-bordered input-primary w-full max-w-xs"
              />
            </div>
            <button className="btn btn-primary w-full max-w-xs">
              Register
            </button>
            <div className="divider">OR</div>
            <div className="w-full flex justify-center items-center">
              <img src={Gicon} className="w-8 cursor-pointer" alt="" />
            </div>
            <p className="text-center mt-3">
              Already have an account?{" "}
              <Link className="hover:text-pink-300 text-primary underline">
                Login
              </Link>
            </p>
          </form>
        </div>
    </div>
  );
};

export default Register;
