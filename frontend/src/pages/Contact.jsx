import React, { useState } from "react";
import { Link } from "react-router";
import Hero from "../components/hero";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_ENDPOINT_URL}/api/messages`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const result = await res.json();

      if (res.ok) {
        alert("Message sent successfully!");
        setFormData({ firstName: "", lastName: "", email: "", message: "" });
      } else {
        alert(result.error || "Failed to send message.");
      }
    } catch (error) {
      console.error("Submit error:", error);
      alert("Something went wrong. Please try again.");
    }
  };
  return (
    <div className="my-40 flex flex-col justify-center mt-0">
      <Hero page="contact" />

      <h1 className="text-center">Contact Us</h1>

      <form
        onSubmit={handleSubmit}
        className="border border-gray-200 p-6 w-[80%] sm:w-[40%] mx-[10%] self-center"
      >
        <div className="space-y-12">
          <div className="border-gray-900/10 pb-5">
            <div className="flex flex-col gap-x-6 gap-y-8 sm:grid-cols-6">
              {/* First Name */}
              <div className="col-span-full">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-900"
                >
                  First Name
                </label>
                <div className="mt-2">
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    required
                    className="w-full py-1.5 px-3 border rounded-md text-base text-gray-900 placeholder:text-gray-400 focus:outline-indigo-600"
                  />
                </div>
              </div>

              {/* Last Name */}
              <div className="col-span-full">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-900"
                >
                  Last Name
                </label>
                <div className="mt-2">
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    required
                    className="w-full py-1.5 px-3 border rounded-md text-base text-gray-900 placeholder:text-gray-400 focus:outline-indigo-600"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="col-span-full">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-900"
                >
                  Email
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="savemypet@gmail.com"
                    required
                    className="w-full py-1.5 px-3 border rounded-md text-base text-gray-900 placeholder:text-gray-400 focus:outline-indigo-600"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="col-span-full">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-900"
                >
                  Message
                </label>
                <div className="mt-2">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="..."
                    required
                    className="w-full py-1.5 px-3 border rounded-md text-base text-gray-900 placeholder:text-gray-400 focus:outline-indigo-600"
                  />
                </div>
              </div>

              <button type="submit" className="btn mt-4">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactPage;
