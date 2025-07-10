import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { fullSchema } from "../../schemas/validationSchema";
import Report from "./sections/Report";
import Email from "./sections/Email";
import Contact from "./sections/Contact";
import Photo from "./sections/Photo";
import Info from "./sections/Info";
import Submit from "./sections/Submit";
import { MdError } from "react-icons/md";

const Accordion = () => {
  // track and update current form section
  const [index, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const methods = useForm({
    mode: "onBlur",
    resolver: yupResolver(fullSchema),
    defaultValues: {
      // part 1
      status: "",
      name: "",
      location: "",
      additionalInfo: "",
      medicalHistory: "",
      microchipped: "",
      // part 2
      email: "",
      // part 3
      firstName: "",
      lastName: "",
      phoneNumber: "",
      // part 4
      img: null,
      // part 5
      animalType: "",
      breed: "",
      color: "",
      sex: "",
    },
  });

  const { trigger, handleSubmit } = methods;

  const formSteps = [
    {
      title: "Report",
      fields: [
        "status",
        "name",
        "location",
        "additionalInfo",
        "medicalHistory",
        "microchipped",
      ],
      content: <Report />,
    },
    {
      title: "Email",
      fields: ["email"],
      content: <Email />,
    },
    {
      title: "Contact Info",
      fields: ["firstName", "lastName", "phoneNumber"],
      content: <Contact />,
    },
    {
      title: "Report Photo",
      fields: [],
      content: <Photo />,
    },
    {
      title: "Pet Info",
      fields: ["animalType", "breed", "color", "sex"],
      content: <Info />,
    },
    {
      title: "Review and Submit Report",
      fields: [],
      content: <Submit />,
    },
  ];

  // Combined each seperate form section together into one array
  const [formContent, setFormContent] = useState(
    formSteps.map((step) => ({ ...step, status: false }))
  );

  // handle clicking next
  const handleNext = async (idx) => {
    const stepFields = formSteps[idx].fields;
    const isValid = await trigger(stepFields);
    if (!isValid) return;

    // update index to move to next section of form
    setCurrentIndex(idx + 1);

    // update form checkbox statuses
    const updatedFormContent = formContent.map((formSection, currIdx) => {
      if (idx !== currIdx) return formSection;
      return { ...formSection, status: true };
    });

    setFormContent(updatedFormContent);
  };

  // handle clicking other form sections
  const handleSectionChange = async (idx) => {
    if (loading) return;

    if (idx > index) {
      const stepFields = formSteps[index].fields;
      const isValid = await trigger(stepFields);
      if (!isValid) return;
    }

    // update index to move to next section of form
    setCurrentIndex(idx);

    // update form checkbox statuses
    const updatedFormContent = formContent.map((formSection, currIdx) => {
      if (idx !== currIdx) return formSection;
      return { ...formSection, status: true };
    });

    setFormContent(updatedFormContent);
  };

  // handle clear button
  const handleFormReset = (idx) => {
    // gather current form section's fields
    const stepFields = formSteps[idx].fields;
    const resetFields = {};
    // generate object of fields to reset to ""
    stepFields.map((field) => (resetFields[field] = ""));
    // reset fields
    methods.reset(resetFields);
  };

  const handleFormSubmission = async (data) => {
    console.log("Form Data: ", data);

    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("location", data.location);
    formData.append("animalType", data.animalType);
    formData.append("microchipped", data.microchipped);
    formData.append("breed", data.breed);
    formData.append("sex", data.sex);
    formData.append("additionalInfo", data.additionalInfo);
    formData.append("status", data.status);
    formData.append("lat", data.lat);
    formData.append("lng", data.lng);

    // add img to form if user uploaded one
    if (data.img?.[0]) {
      formData.append("image", data.img[0]);
    }

    try {
      setLoading(true);
      setError(false);

      // api call
      const res = await fetch(
        `${import.meta.env.VITE_API_ENDPOINT_URL}/api/posts`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`Request failed: ${res.status} - ${errorText}`);
      }

      const response = await res.json();
      console.log("Server Response: ", response);
      setLoading(false);

      // setTimeout(() => {
      //   setLoading(false);
      //   navigate("/map");
      // }, 3000);
    } catch (err) {
      console.error(err.message);
      setError(true);
      setLoading(false);
    }
  };

  // display each form section onto it's own section of the accordion
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit((data) => handleFormSubmission(data))}>
        <fieldset disabled={loading}>
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
                  onClick={() => handleSectionChange(idx)}
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
                      <button type="submit" className="btn">
                        Submit
                      </button>
                    </>
                  ) : (
                    <div className="flex gap-4">
                      <button
                        type="button"
                        className="btn"
                        onClick={() => handleNext(idx)}
                      >
                        Next
                      </button>
                      <button
                        type="button"
                        className="btn"
                        onClick={() => handleFormReset(index)}
                      >
                        Clear
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </fieldset>
      </form>

      {loading && (
        <div className="mt-4 flex justify-center">
          <span className="loading loading-spinner loading-xl" />
        </div>
      )}

      {error && (
        <p className="text-red-500 flex items-center gap-1 mt-2">
          <MdError />
          Server Error. Please try again later.
        </p>
      )}
    </FormProvider>
  );
};

export default Accordion;
