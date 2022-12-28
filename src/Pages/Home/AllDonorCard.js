import React from "react";
import {
  HiChatBubbleOvalLeftEllipsis,
  HiPhoneArrowUpRight,
} from "react-icons/hi2";

const AllDonorCard = ({ user }) => {
  const { email, name, bloodGroup } = user;
  return (
    <div className="flex justify-start items-center bg-white border-2 border-primary rounded-2xl shadow-xl p-4 lg:w-[500px] w-96 mx-auto">
      <img
        src="https://placeimg.com/80/80/people"
        className="w-14 h-14 rounded-full mr-4"
        alt="Donor Image"
      />
      <div className="w-full flex justify-around items-center font-semibold">
        <div>
          <p className="lg:text-2xl mr-6">{name}</p>
          <p className="text-md mr-6 text-semibold">
            Group: <span className="text-primary font-bold">{bloodGroup}</span>
          </p>
        </div>
        <div className="flex justify-center items-center">
          <HiPhoneArrowUpRight className="text-3xl mr-6 cursor-pointer hover:text-primary" />
          <HiChatBubbleOvalLeftEllipsis className="text-3xl cursor-pointer hover:text-primary" />
        </div>
      </div>
    </div>
  );
};

export default AllDonorCard;
