import React from "react";
import { Link } from "react-router";
import Hero from "../components/hero";


const ContactPage = () => {
  return (
    
    <div className="my-40 flex flex-col justify-center mt-0">
      <Hero page="contact"/> 
      <form className="border border-gray-200 p-6 w-[80%] sm:w-[40%] mx-[10%] self-center">
        <div className="space-y-12">
          <div className="border-gray-900/10 pb-5">
            <div className="flex flex-col gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="col-span-full">
                <label
                  htmlFor="firstName"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  First Name
                </label>
                <div className="mt-2">
                  <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                    <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6"></div>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      placeholder="First Name"
                      required
                      className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                    />
                  </div>
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="lastName"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Last Name
                </label>
                <div className="mt-2">
                  <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                    <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6"></div>
                    <input
                      id="LastName"
                      name="LastName"
                      type="text"
                      placeholder="Last Name"
                      required
                      className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                    />
                  </div>
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="email"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Email
                </label>
                <div className="mt-2">
                  <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                    <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6"></div>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="savemypet@gmail.com"
                      required
                      className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                    />
                  </div>
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="message"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Message
                </label>
                <div className="mt-2">
                  <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                    <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6"></div>
                    <textarea
                      id="message"
                      name="message"
                      type="textarea"
                      placeholder="..."
                      required
                      className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                    />
                  </div>
                </div>
              </div>

              <button className="btn">Submit</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactPage;
