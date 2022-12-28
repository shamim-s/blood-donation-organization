import React from "react";
import { useLoaderData } from "react-router-dom";
import { HiUserCircle } from "react-icons/hi";

const UserProfile = () => {
  const user = useLoaderData();
  console.log(user);
  return (
    <div>
      <section className="p-6 bg-white">
        <form
          novalidate=""
          action=""
          className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-xl">
            <div className="space-y-2 col-span-full lg:col-span-1">
              <div>
                <HiUserCircle className="text-8xl"/>
              </div>
              <p className="font-medium">Personal Inormation</p>
              <p className="text-xs">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Adipisci fuga autem eum!
              </p>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label for="firstname" className="text-sm mr-2">
                  First name
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label for="lastname" className="text-sm mr-2">
                  Last name
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label for="email" className="text-sm mr-2">
                  Email
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </div>
              <div className="col-span-full">
                <label for="address" className="text-sm mr-2">
                  Address
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label for="city" className="text-sm">
                  City
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label for="state" className="text-sm">
                  State / Province
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label for="zip" className="text-sm">
                  ZIP / Postal
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </div>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default UserProfile;
