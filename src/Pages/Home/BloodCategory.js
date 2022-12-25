import React from "react";

const BloodCategory = () => {
  return (
    <div className="mt-10 mb-10 ">
        <span className="w-5 h-5 border-l-8 border-primary mr-2"></span><span className="text-2xl font-bold text-primary mb-5">All Blood Grups</span>
      <div className="grid lg:grid-cols-8">
        <div className="mx-auto w-14 h-14 rounded-lg bg-primary flex justify-center items-center">
          <h1 className="text-2xl font-semibold text-white">A+</h1>
        </div>
        <div className="mx-auto w-14 h-14 rounded-lg bg-primary flex justify-center items-center">
          <h1 className="text-2xl font-semibold text-white">O+</h1>
        </div>
        <div className="mx-auto w-14 h-14 rounded-lg bg-primary flex justify-center items-center">
          <h1 className="text-2xl font-semibold text-white">B+</h1>
        </div>
        <div className="mx-auto w-14 h-14 rounded-lg bg-primary flex justify-center items-center">
          <h1 className="text-2xl font-semibold text-white">AB+</h1>
        </div>
        <div className="mx-auto w-14 h-14 rounded-lg bg-primary flex justify-center items-center">
          <h1 className="text-2xl font-semibold text-white">A-</h1>
        </div>
        <div className="mx-auto w-14 h-14 rounded-lg bg-primary flex justify-center items-center">
          <h1 className="text-2xl font-semibold text-white">O-</h1>
        </div>
        <div className="mx-auto w-14 h-14 rounded-lg bg-primary flex justify-center items-center">
          <h1 className="text-2xl font-semibold text-white">B-</h1>
        </div>
        <div className="mx-auto w-14 h-14 rounded-lg bg-primary flex justify-center items-center">
          <h1 className="text-2xl font-semibold text-white">AB-</h1>
        </div>
      </div>
    </div>
  );
};

export default BloodCategory;
