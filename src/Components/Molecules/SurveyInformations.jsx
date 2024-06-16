import Input from "../Atoms/Input";
import Label from "../Atoms/Label";
import { ImageUpload } from "../Atoms/ImageUpload";
import React, { useContext, useEffect, useRef } from "react";
import Data_Context from "../../Context/dataContext";

const SurveyInformations = () => {
    const {
    titleSurvey,
    setTitleSurvey,
    DescriptionSurvey,
    setDescriptionSurvey,
    } = useContext(Data_Context);


  return (
    <div className="py-[40px] flex justify-center items-center gap-28">
        <div>
            <div className="py-[5px]">
                <Label paddingY={"py-[10px]"}>Survey Title</Label>
                <Input 
                        value={titleSurvey}
                        SetTitle={(e)=>setTitleSurvey(e.target.value)}
                        paddigY={"p-3"} paddingX={"px-6"} placeholder={"Enter Title"} rounded={"rounded-lg"}
                       bboreder={"border-[0.5px]"} borderColor={'border-black'}/>
            </div>
            <div>
                <Label paddingY={"py-[10px]"}>Survey Description</Label>
                <textarea
                    value={DescriptionSurvey}
                    onChange={(e)=>setDescriptionSurvey(e.target.value)}
                    id="message"
                    rows="4"
                    className="block p-2.5 pb-6 w-96 text-sm text-gray-900 bg-gray-50 rounded-lg border-black border-[0.5px]"
                    placeholder="Enter Description"
                ></textarea>
            </div>
        </div>
        <div>
            <ImageUpload />
        </div>
    </div>
  );
};

export default SurveyInformations;
