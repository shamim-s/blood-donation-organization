import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginBanner from "../../Images/LoginImage2-01.svg";
import Gicon from "../.././Images/Google.png";
import { AuthContext } from "../../Context/Context";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import Spinner from "../../components/Spinner/Spinner";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const {register, handleSubmit} = useForm();
  const {setUser, userLogin} = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogin = (data, event) => {
    event.preventDefault();
    setLoading(true);

    const email = data.email;
    const password = data.password;

    userLogin(email, password)
    .then(result => {
      setUser(result);
      toast.success('Login successful');
      setLoading(false);
      navigate('/')
    })
    .catch(error => {
      setLoading(false);
      toast.error(error.message);
    })
  }
  return (
    <div className="mt-10 mb-10">
      <div className="flex lg:flex-row flex-col justify-center items-center">
        <div className="lg:w-1/2 flex justify-end lg:mr-8">
          <img src={LoginBanner} alt="" className="w-[500px] rounded-lg" />
        </div>
        <div className="lg:w-1/2">
        <h1 className="font-bold text-primary text-2xl">Login</h1>
          <form onSubmit={(handleSubmit(handleLogin))} className="lg:w-1/2 flex flex-col justify-center">
            <div className="form-control w-full max-w-xs mb-5">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="example@gmail.com"
                className="input input-bordered input-primary w-full max-w-xs"
                {...register('email')}
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="*******"
                className="input input-bordered input-primary w-full max-w-xs"
                {...register('password')}
              />
            </div>
            <p className="text-sm mb-5 mt-2 text-primary underline hover:text-pink-300">
              <Link>forgot password?</Link>
            </p>
            <button className="btn btn-primary w-full max-w-xs">
              {
                loading ? <Spinner/> : 'Login'
              }
            </button>
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
