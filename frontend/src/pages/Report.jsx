import React from "react";
import Accordion from "../components/reportForm/Accordion";

const ReportPage = () => {
  return (
    <div className="bg-white py-10 sm:px-10 mt-20 w-full ">
      <div className="flex flex-col mx-[5%] sm:mx-[25%]">
        <h1 className="text-black text-left mb-6 mx-2 text-3xl">
          Report a Lost or Found Pet
        </h1>

        <h3 className="text-black mx-2 mb-4">
          Submit your report to receive alerts, and have your report forwarded
          to local and national databases
        </h3>

        <Accordion />
      </div>
    </div>
  );
};

export default ReportPage;
