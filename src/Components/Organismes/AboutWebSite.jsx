import AboutImage from "/src/Assets/AboutUs-images/about.png";
import React from "react";

export function AboutWebsite() {
    return (
        <div id='Card-Container'>

            <div className="flex items-center pr-7 pt-8 bg-white  flex-row border-t border-gray-300">
                <img className="object-cover w-70  h-96  md:rounded-s-lg" src={AboutImage} alt=""/>
                <div className="flex flex-col justify-between pl-5">
                    <h5 className="mb-6 text-2xl font-bold tracking-tight text-gray-900 ">Discover SurveyPlus</h5>
                    <p className="mb-3 font-normal py-5 text-xl text-gray-700 ">Our survey application allows users to create and respond to surveys effortlessly.  Users can manage questions and options easily and generate detailed reports on survey results. <br /> A dedicated contact section ensures all user feedback is captured and addressed.
                    </p>
                </div>
            </div>


        </div>
    );
}
