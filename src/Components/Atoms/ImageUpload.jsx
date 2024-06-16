import React, { useContext, useRef, useState } from "react";
import Data_Context from "../../Context/dataContext";

export const ImageUpload = () => {
  const {
    setUrlImg,
    imageSrc,
    setImageSrc,
    fileInputRef
    } = useContext(Data_Context);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result);
        setUrlImg(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
      <div>
        <div className="flex items-center justify-center">
          <label
              htmlFor="dropzone-file"
              className="h-[216px] relative top-[26px] w-[400px] flex flex-col items-center justify-center border-[1px] border-gray-700 border-dashed rounded-lg cursor-pointer bg-gray-50 "
          >
            {imageSrc ? (
                <img src={imageSrc} alt="Uploaded" className="h-full w-full object-cover rounded-lg" />
            ) : (
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                      className="w-8 h-8 mb-4 text-gray-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                  >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 ">
                    <span className="font-semibold">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-xs text-gray-500 ">
                    SVG, PNG, JPG or GIF (MAX. 400x200px)
                  </p>
                </div>
            )}
            <input
                id="dropzone-file"
                type="file"
                className="hidden"
                ref={fileInputRef}
                onChange={handleFileChange}
            />
          </label>
        </div>
      </div>
  );
};
