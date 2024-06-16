import { useParams } from "react-router-dom";
import { Button } from "../Atoms/Button.jsx";
import ResponsesCard from "../Organismes/ResponsesCard.jsx";
import React, { useContext, useEffect, useState } from "react";
import  db  from "../../services/dbConnection.js";
import { getDoc, doc, setDoc } from "firebase/firestore";
import Information from "../Organismes/Informations.jsx";
import { Loader } from "../Atoms/Loader.jsx";
import Swal from "sweetalert2";
import Data_Context from "../../Context/dataContext.js";

function Response() {
  
    const {id,isLoading,documentData,setDocumentData,setIsloading} = useContext(Data_Context);
  
    useEffect(() => {
    const getDocumentById = async () => {
      try {
        const docRef = doc(db, "surveys", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          console.log("Document data recieve from get doc in Response.jsx:", docSnap.data());
          setDocumentData(docSnap.data());
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error getting document:", error);
      } finally {
        setIsloading(false);
      }
    };
    getDocumentById();
  }, [id]);

  const handleOptionChange = (questionId, updatedOptions) => {
    console.log("handleOptionChange updatedData updatedOptions before : ", updatedOptions)
    const updatedQuestions = documentData.questions.map((question) => {
      if (question.id === questionId) {
        return { ...question, options: updatedOptions };
      } else {
        return question;
      }
    });
    console.log("handleOptionChange updatedQuestions after : ", updatedQuestions);
    setDocumentData({ ...documentData, questions: updatedQuestions });
  };

  const sumdata = async () => {
    try {
      const updateSurveyRef = doc(db, "surveys", id);
      await setDoc(updateSurveyRef, documentData);
      console.log(documentData);
      console.log("Document updated successfully!");
    } catch (error) {
      console.error("Error updating document:", error);
    }
    {
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Your Response saved successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <>
      <div className="my-[100px]">
        <h1 className="text-3xl text-center py-[50px] text-[#042B29] font-bold">
          Respond to Survey
        </h1>
        {isLoading && <Loader />}
        <div className=" mx-auto max-w-screen-lg bg-[#5EB7BF]/20 rounded-lg px-[100px] shadow-lg pb-[30px]">
          <h1 className="text-3xl text-center py-[60px] font-semibold">
            {documentData.title}
          </h1>
          {documentData.questions && (
            <ResponsesCard
              data={documentData.questions}
              handleOptionChange={handleOptionChange}
            />
          )}
          <div className="mx-auto w-[900px] ml-[-38px] mb-8 bg-[#5EB7BF]/20 rounded-lg px-[140px] shadow-lg ">
            <Information />
          </div>
          <div className="ml-[705px]">
            <Button
              paddingY="py-3"
              paddingX="px-8"
              marginX="ml-[48px]"
              bgColor="bg-[#042B29]"
              addnewComponent={sumdata}
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Response;
