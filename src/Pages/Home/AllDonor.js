import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import {
  HiChatBubbleOvalLeftEllipsis,
  HiPhoneArrowUpRight,
} from "react-icons/hi2";

const AllDonor = () => {
  return (
    <div className="mt-10 mb-10">
      <span className="w-5 h-5 border-l-8 border-primary mr-2 lg:ml-0 ml-2"></span>
      <span className="text-2xl text-primary font-bold">All Donor</span>
      <div className="mt-5 grid lg:grid-cols-2 gap-4">
        <div className="flex justify-start items-center bg-white border-2 border-primary rounded-2xl shadow-xl p-4 lg:w-[500px] w-96 mx-auto">
          <img
            src="https://placeimg.com/80/80/people"
            className="w-14 h-14 rounded-full mr-4"
            alt="Donor Image"
          />
          <div className="w-full flex justify-around items-center font-semibold">
            <div>
              <p className="lg:text-2xl mr-6">Shahariyar Hossain</p>
              <p className="text-md mr-6 text-semibold">Group: A+</p>
            </div>
            <div className="flex justify-center items-center">
              <HiPhoneArrowUpRight className="text-3xl mr-6 cursor-pointer hover:text-primary"/>
              <HiChatBubbleOvalLeftEllipsis className="text-3xl cursor-pointer hover:text-primary"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllDonor;
