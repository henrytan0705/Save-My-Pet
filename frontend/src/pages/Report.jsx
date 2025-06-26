import React from "react";
import ReportForm from "../components/ReportForm";

const ReportPage = () => {
  return (
    <div className="bg-white p-10 mt-10 w-full">
      <div className="flex flex-col mx-[25%]">
        <h1 className="text-black text-left mb-5">
          Report a Lost or Found Pet
        </h1>

        <h3 className="text-black">
          Submit your report to receive alerts, and have your report forwarded
          to local and national databases
        </h3>

        <ReportForm />
      </div>
    </div>
  );
};

export default ReportPage;
