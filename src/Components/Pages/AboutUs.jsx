import { AboutStatistic } from "../Organismes/AboutStatistic.jsx";
import { AboutWebsite } from "../Organismes/AboutWebSite.jsx";
import { WhoWeAre } from "../Organismes/WhoWeAre.jsx";
import React from "react";

export function AboutUs() {
    return (
        <div className="py-8 lg:py-16 px-12 mx-auto max-w-[1300px] mt-32 ">
            <h2 className="mb-9 text-4xl tracking-tight font-extrabold text-center text-[#042B29] ">
                About Us
            </h2>
            <AboutWebsite/>
            <AboutStatistic/>
            <WhoWeAre/>
        </div>

    );
}