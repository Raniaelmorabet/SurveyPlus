import { Cards } from "../Molecules/Cards.jsx";
import { collection, getDocs } from "firebase/firestore";
import db from "../../services/dbConnection.js";
import React, { useContext, useEffect, useState } from "react";
import { Loader } from "../Atoms/Loader.jsx";
import Data_Context from "../../Context/dataContext.js";

export function CardGallery() {

    const {isLoading,survey,setSurvey,setIsloading} = useContext(Data_Context);

    const col = collection(db, "surveys");
    useEffect(() => {
        const getSurvey = async () => {
            try {
                const data = await getDocs(col);
                setSurvey(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            } catch (error) {
                console.error("Error fetching survey:", error);
            } finally {
                setIsloading(false);
            }
        };
        getSurvey();
    }, []);
    return (
        <div
            id="Card--Gallery"
            className="flex justify-around flex-wrap my-[50px] px-28 gap-y-[430px]"
        >
            {isLoading && <Loader /> }
            {survey.map((v) => (
                <React.Fragment key={v.id}>
                    <Cards
                        setSurvey={setSurvey}
                        survey={survey}
                        id={v.id}
                        title={v.title}
                        description={v.description}
                        image={v.image}
                    />
                </React.Fragment>
            ))}
        </div>
    );
}