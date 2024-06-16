import { Children, useContext,useState,useRef } from "react";
import { useParams } from "react-router-dom";
import Data_Context from "./dataContext";
import React from "react";

function ProviderContext({children}){
  const { id } = useParams();
  const form = useRef();
    const [titleSurvey, setTitleSurvey] = useState("");
    const [DescriptionSurvey, setDescriptionSurvey] = useState("");
    const [url, setUrlImg] = useState("");
    const [Question, setQuestion] = useState([])
    const [imageSrc, setImageSrc] = useState(null);
    const fileInputRef = useRef(null);
    const [survey, setSurvey] = useState([]);
    const [isLoading, setIsloading] = useState(true);
    const [documentData, setDocumentData] = useState({});
    const [messageSent, setMessageSent] = useState(false);
    const [titleQuestionCtx, setTitleQuestionCtx] = useState("");
    const [optionCtx, setOptionCtx] = useState([{ name: "", checked: 0 }]);
    const [docRepo, setDocRepo]=useState({})
  return (
    
  <Data_Context.Provider value={
    {docRepo,
      setDocRepo,titleSurvey,
    setTitleSurvey,
    DescriptionSurvey,
    setDescriptionSurvey,
    url,
    setUrlImg,
    Question,
    setQuestion,
    imageSrc,
    setImageSrc,
    fileInputRef,
    survey,
    setSurvey,
    isLoading,
    setIsloading,
    documentData,
    setDocumentData,
    id,
    form,
    setMessageSent,
    messageSent,
    titleQuestionCtx,
    setTitleQuestionCtx,
    optionCtx,
    setOptionCtx
    }
    }>
    {children}
  </Data_Context.Provider>
  )
}

export default ProviderContext
