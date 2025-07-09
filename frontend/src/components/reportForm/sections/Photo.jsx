import React, { useState, useEffect } from "react";
import { FaFileImage } from "react-icons/fa";
import { useFormContext } from "react-hook-form";

const Photo = () => {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext();

  const img = watch("img");
  const file = img?.[0];

  const [previewUrl, setPreviewUrl] = useState(null);

  useEffect(() => {
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setPreviewUrl(objectUrl);
      return () => URL.revokeObjectURL(objectUrl); // Clean up
    }
  }, [file]);

  return (
    <div className="col-span-full">
      <label
        htmlFor="cover-photo"
        className="block text-sm/6 font-medium text-gray-900"
      >
        Upload a photo of the missing/found pet if available.
      </label>
      <div className="mt-2 mb-4 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
        <div className="text-center">
          <FaFileImage
            aria-hidden="true"
            className="mx-auto size-12 text-gray-300"
          />
          <div className="mt-4 flex text-sm/6 text-gray-600">
            <label
              htmlFor="file-upload"
              className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 focus-within:outline-hidden hover:text-indigo-500"
            >
              <span>Upload a file</span>
              <input
                {...register("img")}
                id="file-upload"
                name="img"
                type="file"
                className="sr-only"
              />
            </label>
            <p className="pl-1">or drag and drop</p>
          </div>
          <p className="text-xs/5 text-gray-600">PNG, JPG, GIF up to 10MB</p>

          {file && (
            <div className="mt-4">
              <p className="text-sm text-gray-700 mb-1">{file.name}</p>
              <img
                src={previewUrl}
                alt="Uploaded preview"
                className="mx-auto max-h-48 rounded-md border"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Photo;
