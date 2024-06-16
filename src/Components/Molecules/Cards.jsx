import { Button } from "../Atoms/Button.jsx";
import { Link } from "react-router-dom";
import { deleteDoc, doc } from "firebase/firestore";
import db from "../../services/dbConnection.js";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
import React from 'react';

export function Cards({ survey, setSurvey, title, image, description, id }) {

    const deleteSurvey = async () => {
        try {
            const newSurvey = survey.filter((e) => e.id !== id);
            setSurvey(newSurvey);

            const refdoc = doc(db, "surveys", id);
            await deleteDoc(refdoc);

            Swal.fire("Deleted!", "Your survey has been deleted.", "success");
        } catch (error) {
            console.error("Error deleting survey: ", error);
            Swal.fire("Error", "There was an issue deleting the survey.", "error");
        }
    };

    return (
        <div
            id="card--container"
            className="max-w-[20rem] max-h-[50px] m-4 bg-white rounded-lg"
        >
            <a href="#">
                <img
                    className="rounded-t-lg w-full h-72 object-cover"
                    src={`${image}`}
                />
            </a>
            <div className="p-5 shadow-lg">
                <a href="#" className="block text-center">
                    <h5 className="mb-2 text-2xm font-bold tracking-tight text-gray-900">
                        {title}
                    </h5>
                </a>
                <p className="mb-3 text-2xm text-center font-normal text-gray-700 dark:text-gray-400 line-clamp-2">
                    {description}
                </p>
                <div className="flex justify-between gap-1">
                    <Link to={`/reportPage/${id}`}>
                        <Button
                            bgColorHover={"hover:bg-transparent"}
                            textColor={"hover:text-[#042B29]"}
                            border={"hover:border-[2px]"}
                            borderColor={"hover:border-[#042B29]"}
                            transition={"duration-200"}
                            paddingY="py-3"
                            paddingX="px-6"
                            bgColor="bg-[#042B29]"
                        >
                            View report
                        </Button>
                    </Link>
                    <Link to={`/Response/${id}`}>
                        <Button paddingY="py-3" paddingX="px-6" bgColor="bg-[#6DBEC5]">
                            Respond
                        </Button>
                    </Link>
                    <MdDeleteForever size={35} className='mt-[4px] cursor-pointer ' onClick={deleteSurvey}/>
                </div>
            </div>
        </div>
    );
}