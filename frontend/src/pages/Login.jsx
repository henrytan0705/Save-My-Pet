import React from "react";
import { Link } from "react-router";

const LoginPage = () => {
  return (
    <div className="my-[10%] mx-[10%] flex justify-center">
      {/* <h1 className="text-center">Login Page</h1> */}

      <form className="p-6 w-[80%] sm:w-[40%]">
        <div className="space-y-12">
          <div className="border-gray-900/10 pb-5">
            <div className="flex flex-col gap-x-6 gap-y-8 sm:grid-cols-6">
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
                      placeholder="Fido@gmail.com"
                      required
                      className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                    />
                  </div>
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Password
                </label>
                <div className="mt-2">
                  <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                    <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6"></div>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="********"
                      required
                      className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                    />
                  </div>
                </div>
              </div>

              <button className="btn">Sign In</button>

              <div className="flex flex-col">
                <Link to="/forgotPassword">Forgot Password</Link>
                <Link to="/register">Create Account</Link>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
