import React from "react";
import { useFormContext } from "react-hook-form";

const Info = () => {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext();

  const selectedSex = watch("sex");

  return (
    <div className="">
      <div className="space-y-12">
        <div className="border-gray-900/10 pb-5">
          <div className="flex flex-col gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="col-span-full">
              <label
                htmlFor="animalType"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Animal Type*
              </label>
              <div className="mt-2">
                <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                  <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6"></div>
                  <input
                    {...register("animalType")}
                    id="animalType"
                    name="animalType"
                    type="text"
                    placeholder="Dog/Cat/Bird/Rabbit/other"
                    required
                    className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                  />
                  {errors.animalType && (
                    <p className="text-red-500">{errors.animalType.message}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="breed"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Breed*
              </label>
              <div className="mt-2">
                <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                  <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6"></div>
                  <input
                    {...register("breed")}
                    id="breed"
                    name="breed"
                    type="text"
                    placeholder="Breed"
                    required
                    className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                  />
                  {errors.breed && (
                    <p className="text-red-500">{errors.breed.message}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="color"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Color*
              </label>
              <div className="mt-2">
                <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                  <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6"></div>
                  <input
                    {...register("color")}
                    id="color"
                    name="color"
                    type="text"
                    placeholder="Brown/Blonde/etc"
                    required
                    className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                  />
                  {errors.color && (
                    <p className="text-red-500">{errors.color.message}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="color"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Sex*
              </label>
              <div className="mt-2">
                <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                  <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6"></div>
                  <select
                    {...register("sex")}
                    id="sex"
                    name="sex"
                    className={`block min-w-0 grow py-1.5 pr-3 pl-1 bg-white text-base  focus:outline-none sm:text-sm mr-3 ${
                      selectedSex === "" ? "text-gray-400" : "text-gray-900"
                    }`}
                    defaultValue=""
                  >
                    <option value="" disabled={true}>
                      Male/Female/Unsure
                    </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Unsure">Unsure</option>
                  </select>
                  {errors.sex && (
                    <p className="text-red-500">{errors.sex.message}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
