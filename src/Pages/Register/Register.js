import React, { useContext } from "react";
import { Link } from "react-router-dom";
import LoginBanner from "../.././Images/LoginImage1-01.svg";
import Gicon from "../.././Images/Google.png";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Context/Context";
import { toast } from "react-hot-toast";

const Register = () => {
  const { createNewUser, setUser, updateUser } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();

  const handleRegister = (data, event) => {
    event.preventDefault();

    const name = data.name;
    const email = data.email;
    const password = data.password;

    createNewUser(email, password)
    .then((result) => {
      const user = result.user;
      console.log(user);
      updateUser(name)
      .then(() => {
        setUser(user);
        toast.success("Registration Success");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
    })
    .catch((err) => {
      console.log(err);
      toast.error(err.message);
    })
  };
  return (
    <div className="flex lg:flex-row flex-col justify-center items-center mt-10 mb-10">
      <div className="lg:w-1/2 flex justify-end">
        <img src={LoginBanner} alt="" className="w-[500px] rounded-lg" />
      </div>
      <div className="lg:w-1/2">
        <h1 className="font-bold text-primary text-2xl">Register</h1>
        <form
          onSubmit={handleSubmit(handleRegister)}
          className="lg:w-1/2 flex flex-col justify-center"
        >
          <div className="form-control w-full max-w-xs mb-2">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="example"
              {...register("name")}
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
              name="email"
              {...register("email")}
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
              name="password"
              {...register("password")}
              className="input input-bordered input-primary w-full max-w-xs"
            />
          </div>
          <button className="btn btn-primary w-full max-w-xs">Register</button>
          <div className="divider">OR</div>
          <div className="w-full flex justify-center items-center">
            <img src={Gicon} className="w-8 cursor-pointer" alt="" />
          </div>
          <p className="text-center mt-3">
            Already have an account?{" "}
            <Link
              to={"/login"}
              className="hover:text-pink-300 text-primary underline"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
