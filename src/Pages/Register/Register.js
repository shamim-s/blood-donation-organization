import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginBanner from "../.././Images/LoginImage1-01.svg";
import Gicon from "../.././Images/Google.png";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Context/Context";
import { toast } from "react-hot-toast";
import Spinner from "../../components/Spinner/Spinner";

const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { createNewUser, setUser, updateUser } = useContext(AuthContext);
  const { register, handleSubmit, reset, formState:{errors} } = useForm();

  //Sign Up function
  const handleRegister = (data, event) => {
    event.preventDefault();
    console.log(data);

    setLoading(true);
    const name = data.name;
    const email = data.email;
    const password = data.password;
    const bloodGroup = data.bloodGroup;

    const addUser = {
      name,
      email,
      bloodGroup
    };

    //Creating new user
    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);

        //Updating user name after registration
        updateUser(name)
          .then(() => {
            addUserToDB(addUser);
            setUser(user);
          })
          .catch((err) => {
            console.log(err);
            toast.error(err.message);
          });
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        toast.error(err.message);
        reset();
      });
  };

  //Adding user to database after registration
  const addUserToDB = (user) => {
    fetch(`http://localhost:5000/newUser`, {
      method: "POST",
      headers: {
        "content-type": "application/JSON",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Registration Success");
        setLoading(false);
        navigate('/');
      });
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
              {
                errors.name ? <span className="label-text text-primary">Name is required *</span> : 
                <span className="label-text">Name</span>
              }
            </label>
            <input
              type="text"
              name="name"
              placeholder="example"
              {...register("name", {required: true, maxLength: 20})}
              className="input input-bordered input-primary w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs mb-2">
            <label className="label">
            {
                errors.email ? <span className="label-text text-primary">Email is required *</span> : 
                <span className="label-text">Email</span>
              }
            </label>
            <input
              type="email"
              placeholder="example@gmail.com"
              name="email"
              {...register("email", {required: true})}
              className="input input-bordered input-primary w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs mb-2">
            <label className="label">
            {
                errors.bloodGroup ? <span className="label-text text-primary">Blood Group is required *</span> : 
                <span className="label-text">Blood Group</span>
              }
            </label>
            <select 
              {...register('bloodGroup', {required: true})}
              name="bloodGroup"
              className="select select-primary w-full max-w-xs">
              <option disabled selected value={''}>
                Please select your blood group
              </option>
              <option value={'A+'}>A+</option>
              <option value={'O+'}>O+</option>
              <option value={'B+'}>B+</option>
              <option value={'AB+'}>AB+</option>
              <option value={'A-'}>A-</option>
              <option value={'O-'}>O-</option>
              <option value={'B-'}>B-</option>
              <option value={'AB-'}>AB-</option>
            </select>
          </div>
          <div className="form-control w-full max-w-xs mb-5">
            <label className="label">
              {
                errors.password ? <span className="label-text text-primary">{errors.password?.message}</span> : 
                <span className="label-text">Password</span>
              }
            </label>
            <input
              type="password"
              placeholder="*******"
              name="password"
              {...register("password", {required: 'Password is required', 
                minLength: {
                value: 6,
                message: 'Password must be 6 characters'
              },
              pattern: {
                value: /(?=.*[A-Z])(?=.*[0-9])(.*[a-z])/,
                message: 'Password must contain at least one uppercase letter and one lowercase letter'
              }
               })}
              className="input input-bordered input-primary w-full max-w-xs"
            />
          </div>
          <button className="btn btn-primary w-full max-w-xs">
            {loading ? <Spinner /> : "Register"}
          </button>
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
