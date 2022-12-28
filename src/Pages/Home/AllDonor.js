import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import AllDonorCard from "./AllDonorCard";

const AllDonor = () => {
  const{data:users = [], refetch} = useQuery({
    queryKey: ['Users'],
    queryFn: async() => {
      const res = await fetch(`http://localhost:5000/users`)
      const data = await res.json();
      return data;
    }
  });
  refetch();
  console.log(users);
  return (
    <div className="mt-10 mb-10">
      <span className="w-5 h-5 border-l-8 border-primary mr-2 lg:ml-0 ml-2"></span>
      <span className="text-2xl text-primary font-bold">All Donor</span>
      <div className="mt-5 grid lg:grid-cols-2 gap-4">
        {
          users.map(user => <AllDonorCard key={user._id} user={user}/>)
        }
      </div>
    </div>
  );
};

export default AllDonor;
