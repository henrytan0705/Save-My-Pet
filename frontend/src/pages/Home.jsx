import React from "react";
import Hero from "../components/hero";

const HomePage = () => {
    return (
      <div className="w-full">
            <div>
                <Hero />
                <div className="max-w-4x1 mx-auto py-8 px-4"> 
                    <h1>Home Page Content</h1>
                    <p className="mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni qui
                        animi vero mollitia blanditiis doloribus facilis consectetur, quasi
                        delectus nobis optio explicabo suscipit expedita aut. Cupiditate
                        blanditiis quisquam suscipi
                    </p>
                </div>
            </div>
      </div>
  );
};

export default HomePage;
