import { useQuery } from "@tanstack/react-query";
import React from "react";

const BloodCategory = () => {
  const { data: bloodCategory = [], refetch} = useQuery({
    queryKey: ['bloodCategory'],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/category`);
      const data = res.json();
      return data;
    }
  });
  console.log(bloodCategory);
  return (
    <div className="mt-10 mb-10 ">
        <span className="w-5 h-5 border-l-8 border-primary mr-2 lg:ml-0 ml-2"></span>
        <span className="text-2xl font-bold text-primary lg:ml-0 ml-2">All Blood Groups</span>
      <div className="grid lg:grid-cols-8 mt-5 grid-cols-4 gap-4">
        {
          bloodCategory.map(blood => <div 
          key={blood._id}
          className="mx-auto w-16 h-16 bg-primary rounded-lg flex justify-center items-center"
          >
            <h1 className="text-2xl text-white font-semibold">{blood.bloodGroup}</h1>
          </div>)
        }
      </div>
    </div>
  );
};

export default BloodCategory;
