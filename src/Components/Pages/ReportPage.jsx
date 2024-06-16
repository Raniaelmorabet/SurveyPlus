import { useContext, useEffect } from "react"
import Reports from "../Organismes/Reports.jsx"
import React from 'react';
import Data_Context from "../../Context/dataContext"
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../services/dataFile";
import { Loader } from "../Atoms/Loader";
function ReportPage(){
    const {docRepo ,setDocRepo ,setIsloading ,isLoading  ,id}=useContext(Data_Context)

    useEffect(() => {
        const getDocumentById = async () => {
            try {
                const docRef = doc(db, "surveys", id);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    console.log("Document data receive from get doc in Response.jsx:", docSnap.data());
                    setDocRepo(docSnap.data());
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
    return(
        <>
            <h1 className="text-3xl text-center text-[#042B29] pt-[150px] pb-14 font-bold">Report Page</h1>
            <div className=" mx-auto max-w-screen-lg bg-[#5EB7BF]/20 rounded-lg px-[100px] shadow-lg pb-[60px] pt-[60px]" >
                {isLoading && <Loader/>}
                {docRepo && <Reports data={docRepo}/>}
            </div>

        </>
    )
}
export default ReportPage