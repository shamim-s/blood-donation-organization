import React from "react";
import { Link } from "react-router-dom";
import LoginBanner from "../../Images/LoginImage2-01.svg";

const Login = () => {
  return (
    <div className="flex lg:flex-row flex-col justify-center items-center mt-10 mb-10">
        <div className="lg:w-1/2 flex justify-end lg:mr-8">
          <img src={LoginBanner} alt="" className="w-[500px] rounded-lg" />
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <form className="lg:w-1/2">
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
            <p className="text-center">
              Don't have an account?{" "}
              <Link className="hover:text-pink-300 text-primary underline">
                Register
              </Link>
            </p>
          </form>
        </div>
    </div>
  );
};

export default Login;