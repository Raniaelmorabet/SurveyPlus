import SurveyInformations from "../Molecules/SurveyInformations";
import QuestionLists from "../Organismes/QuestionLists.jsx";
import React from 'react';


const CreateSurvey = () => {
 
  return (
    <div>
      <h1 className="text-3xl text-center pt-[150px] text-[#042B29] pb-14 font-bold">Create Survey</h1>
      <div className=" mx-auto max-w-screen-lg bg-[#5EB7BF]/20 rounded-lg px-[100px] shadow-lg pb-[30px]">
        <SurveyInformations/>
        <QuestionLists/>
              </div>
        </div>
  );
};

export default CreateSurvey;
