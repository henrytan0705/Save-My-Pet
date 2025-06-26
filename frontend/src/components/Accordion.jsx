import React, { useState } from "react";
import Report from "./reportForm/Report";
import Email from "./reportForm/Email";
import Contact from "./reportForm/Contact";
import Photo from "./reportForm/Photo";
import Info from "./reportForm/Info";
import Submit from "./reportForm/Submit";

const Accordion = () => {
  // track and update current form section
  const [index, setCurrentIndex] = useState(0);

  // Combined each seperate form section together into one array
  const [formContent, setFormContent] = useState([
    { title: "Report", content: <Report />, status: false },
    { title: "Email", content: <Email />, status: false },
    { title: "Contact Info", content: <Contact />, status: false },
    { title: "Report Photo", content: <Photo />, status: false },
    { title: "Pet Info", content: <Info />, status: false },
    { title: "Review and Submit Report", content: <Submit /> },
  ]);

  // handle accordion transition and states
  const handleNext = (idx) => {
    // update index to move to next section of form
    setCurrentIndex(idx + 1);

    // update form checkbox statuses
    const updatedFormContent = formContent.map((formSection, currIdx) => {
      if (idx !== currIdx) return formSection;
      return { ...formSection, status: true };
    });

    setFormContent(updatedFormContent);
  };

  // display each form section onto it's own section of the accordion
  return (
    <div className="join join-vertical">
      {formContent.map((formSection, idx) => (
        <div
          key={idx}
          className={`collapse collapse-arrow join-item border border-base-300 ${
            index === idx ? "collapse-open" : "collapse-close"
          }`}
        >
          <div
            className="collapse-title font-semibold flex gap-2 items-center"
            onClick={() => setCurrentIndex(idx)}
          >
            <div className="group grid size-4 grid-cols-1">
              <input
                checked={formSection.status && index != idx}
                id="chipped"
                name="chipped"
                type="checkbox"
                aria-describedby="chipped-status"
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
            {formSection.title}
          </div>

          <div className="collapse-content text-sm ">
            {formSection.content}

            {formSection.title === "Review and Submit Report" ? (
              <>
                <button className="text-white">Submit</button>
              </>
            ) : (
              <div className="flex gap-4">
                <button className="text-white" onClick={() => handleNext(idx)}>
                  Next
                </button>
                <button className="text-white">Clear</button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
