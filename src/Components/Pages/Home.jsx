import { CardGallery } from "../Organismes/CardGallery.jsx";
import React from "react";

export function Home() {

    return (
        <>
            <h1 className="text-3xl text-center mt-[150px] text-[#042B29] font-bold">
                Available Surveys
            </h1>
            <CardGallery />
        </>
    );
}
