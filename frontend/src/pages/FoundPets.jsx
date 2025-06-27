import React from "react";

const FoundPetsPage = () => {
  return (
    <div className="my-40 mx-[10%]">
      <h1 className="text-center">Found Pets Page</h1>

      <label className="input bg-white my-5 border border-black mx-[25%] w-[50%]">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input type="search" required placeholder="Search" />
      </label>

      <p className="mt-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni qui
        animi vero mollitia blanditiis doloribus facilis consectetur, quasi
        delectus nobis optio explicabo suscipit expedita aut. Cupiditate
        blanditiis quisquam suscipit. Deleniti.
      </p>

      <p className="mt-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni qui
        animi vero mollitia blanditiis doloribus facilis consectetur, quasi
        delectus nobis optio explicabo suscipit expedita aut. Cupiditate
        blanditiis quisquam suscipit. Deleniti.
      </p>

      <p className="mt-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni qui
        animi vero mollitia blanditiis doloribus facilis consectetur, quasi
        delectus nobis optio explicabo suscipit expedita aut. Cupiditate
        blanditiis quisquam suscipit. Deleniti.
      </p>
    </div>
  );
};

export default FoundPetsPage;
