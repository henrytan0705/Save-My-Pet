import React from "react";

const Info = () => {
  return (
    <form className="">
      <div className="space-y-12">
        <div className="border-gray-900/10 pb-5">
          <div className="flex flex-col gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="col-span-full">
              <label
                htmlFor="type"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Animal Type
              </label>
              <div className="mt-2">
                <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                  <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6"></div>
                  <input
                    id="type"
                    name="type"
                    type="text"
                    placeholder="Dog/Cat/Bird/other"
                    required
                    className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                  />
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="breed"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Breed
              </label>
              <div className="mt-2">
                <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                  <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6"></div>
                  <input
                    id="breed"
                    name="breed"
                    type="text"
                    placeholder="Breed"
                    required
                    className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                  />
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="color"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Color
              </label>
              <div className="mt-2">
                <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                  <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6"></div>
                  <input
                    id="color"
                    name="color"
                    type="text"
                    placeholder="Brown/Blonde/etc"
                    required
                    className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                  />
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="color"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Sex
              </label>
              <div className="mt-2">
                <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                  <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6"></div>
                  <select
                    id="sex"
                    name="sex"
                    className="block min-w-0 grow py-1.5 pr-3 pl-1 bg-white text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm mr-3"
                    defaultValue=""
                  >
                    <option value="" disabled={true}>
                      Male/Female
                    </option>
                    <option value="lost">Male</option>
                    <option value="found">Female</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Info;
