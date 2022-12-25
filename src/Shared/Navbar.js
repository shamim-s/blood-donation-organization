import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/Context";

const Navbar = () => {
  const {user, logoutUser} = useContext(AuthContext);
  const handleLogout = () => {
    logoutUser()
    .then(() => {
      toast.success('Logged out');
    })
    .catch((err) => {
      console.log(err);
      toast.error('Logout failed');
    })
  }
  return (
    <div className="navbar flex justify-between lg:bg-white bg-primary text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box text-primary font-semibold w-52"
          >
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
            <Link to={"/"}>All Donor</Link>
          </li>
            {
              user?.email ?
              <li><p onClick={handleLogout} className="">Logout</p></li>
              : 
            <li>
              <Link to={"/login"}>Login</Link>
            </li>
            }
          </ul>
        </div>
        <Link to={'/'} className="btn btn-ghost normal-case font-bold text-xl text-white lg:text-primary">BDO</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-primary font-semibold tracking-normal antialiased">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/"}>All Donor</Link>
          </li>
            {
              user?.uid ?
              <li><p onClick={handleLogout} className="">Logout</p></li>
             : 
              <li><Link to={"/login"}>Login</Link></li>
            }
          {
            user && <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              {
                user?.photoURL ? <img src={user.photoURL} alt=""/> 
                :
                <img src="https://placeimg.com/80/80/people" />
              }
            </div>
          </label>
          }
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
