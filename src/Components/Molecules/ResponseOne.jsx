import React, { useState } from "react";

export default function
    ResponseOne({
                  title,
                  options,
                  handleOptionChange,
                  questions,
                }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelection = (optionName) => {
    const newOptions = options.map((option) => ({
      ...option,
      checked: option.name === optionName ? true : false,
    }));

    setSelectedOption(optionName);
    handleOptionChange(questions, newOptions);
  };

  return (
      <>
        <div className="border-b-[1px] border-black/20 mb-10">
          <h6 className="font-bold pb-5 ">
            <span>{title}</span>
          </h6>
          <div className="px-6">
            {options.map((option, index) => (
                <div
                    key={index}
                    onClick={() => handleOptionSelection(option.name)}
                    className={`flex items-center mb-5 border-gray-500 border-[0.5px] p-4 rounded-lg ${
                        selectedOption === option.name ? "border-[#6DBEC5]/95 border-[2px] bg-[#6DBEC5]/10" : ""
                    }`}
                >
                  <label className="ms-2 text-sm font-medium">{option.name}</label>
                </div>
            ))}
          </div>
        </div>
      </>
  );
}