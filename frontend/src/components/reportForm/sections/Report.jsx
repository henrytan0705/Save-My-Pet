import React, { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { AddressAutofill } from "@mapbox/search-js-react";

const Report = () => {
  const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN;
  const {
    register,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext();

  const status = watch("status");

  const extractAddressInfo = (event) => {
    const feature = event.features[0];
    setValue("location", feature.place_name);

    const [lng, lat] = feature.geometry.coordinates;
    setValue("lat", lat);
    setValue("lng", lng);
  };

  useEffect(() => {
    register("lat");
    register("lng");
  }, [register]);

  return (
    <div className="">
      <div className="space-y-12">
        <div className="border-gray-900/10 pb-5">
          <div className="mt-2 flex flex-col gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="w-full">
              <label
                htmlFor="status"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Status*
              </label>
              <div className="mt-2">
                <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                  <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6"></div>
                  <select
                    {...register("status")}
                    id="status"
                    name="status"
                    className={`block min-w-0 grow py-1.5 pr-3 pl-1 bg-white text-base focus:outline-none sm:text-sm mr-3 ${
                      status === "" ? "text-gray-400" : "text-gray-900"
                    }`}
                    defaultValue=""
                  >
                    <option value="" disabled={true}>
                      Lost or Found a Pet?
                    </option>
                    <option value="lost">Lost</option>
                    <option value="found">Found</option>
                  </select>
                  {errors.status && (
                    <p className="text-red-500">{errors.status.message}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="petname"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Pet Name*
              </label>
              <div className="mt-2">
                <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                  <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6"></div>
                  <input
                    {...register("petname")}
                    id="petname"
                    name="petname"
                    type="text"
                    placeholder="What is the name of the pet?"
                    className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                  />
                  {errors.petname && (
                    <p className="text-red-500">{errors.petname.message}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="w-full">
              <label
                htmlFor="location"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Location*
              </label>
              <div className="mt-2">
                <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                  <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6"></div>

                  <AddressAutofill
                    accessToken={MAPBOX_TOKEN}
                    onRetrieve={(e) => extractAddressInfo(e)}
                  >
                    <input
                      {...register("location")}
                      id="location"
                      name="location"
                      type="text"
                      placeholder="Nearest Intersection or Address"
                      className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                    />
                  </AddressAutofill>

                  {errors.location && (
                    <p className="text-red-500">{errors.location.message}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="">
              <label
                htmlFor="additonalInfo"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Additional Info
              </label>
              <div className="mt-2">
                <textarea
                  {...register("additionalInfo")}
                  id="additonalInfo"
                  name="additonalInfo"
                  rows={3}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  placeholder="Additional Details about the location where the pest was lost or found"
                />
              </div>
              <p className="mt-3 text-sm/6 text-gray-400">
                REQUIRED: PLEASE INCLUDE A VALID CROSS STREET OR INTERSECTION -
                Some streets are several miles long. Adding the nearest
                intersection will help pinpoint where the pet was lost/found
              </p>
            </div>

            <div className="sm:w-[40%] w-full">
              <label
                htmlFor="number"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Medical History
              </label>
              <div className="mt-2">
                <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                  <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6"></div>
                  <input
                    {...register("medicalHistory")}
                    id="medical-history"
                    name="medical-history"
                    type="text"
                    placeholder="Medical History (If any)"
                    className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                  />
                </div>
              </div>
            </div>

            <div className="w-[30%] space-y-10">
              <fieldset>
                <div className="space-y-6">
                  <div className="flex gap-3">
                    <div className="flex h-6 shrink-0 items-center">
                      <div className="group grid size-4 grid-cols-1">
                        <input
                          {...register("microchipped")}
                          defaultChecked
                          id="microchipped"
                          name="microchipped"
                          type="checkbox"
                          aria-describedby="microchipped-status"
                          className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                        />
                        <svg
                          fill="none"
                          viewBox="0 0 14 14"
                          className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                        >
                          <path
                            d="M3 8L6 11L11 3.5"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="opacity-0 group-has-checked:opacity-100"
                          />
                          <path
                            d="M3 7H11"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="opacity-0 group-has-indeterminate:opacity-100"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="text-sm/6">
                      <label
                        htmlFor="micro-chipped"
                        className="font-medium text-gray-900"
                      >
                        Micro-chipped?
                      </label>
                      <p id="chipped-status" className="text-gray-500">
                        Is your pet micro-chipped or have a tracker of some kind
                      </p>
                    </div>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;
