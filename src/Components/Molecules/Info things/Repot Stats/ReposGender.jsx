import { useEffect, useState } from "react";
import { TbRectangleFilled } from "react-icons/tb";
import { Loader } from "../../../Atoms/Loader";
import React from 'react';

function ReposGender({ manRepo, womanRepo }) {
    const [manPer, setManPer] = useState(null);

    useEffect(() => {
        if (manRepo + womanRepo > 0) {
            const percentage = Math.floor((manRepo / (manRepo + womanRepo)) * 100);
            setManPer(percentage);
        } else {
            setManPer(0);
        }
    }, [manRepo, womanRepo]);

    return (
        <>
            {manPer === null ? <Loader /> : (
                <div className="mx-auto max-w-screen-lg bg-[#5EB7BF]/20 rounded-lg px-[100px] shadow-lg p-[30px] mb-[50px]">
                    <h1 className="text-3xl text-center text-[#042B29] font-semibold">Gender Report</h1>
                    <div className="justify-center items-center flex">
                        <div className="w-full h-[40px] bg-[#F7AD19] rounded-full relative">
                            <div
                                className="bg-[#429EBD] text-xs font-medium text-blue-100 text-center p-4 leading-none rounded-full rounded-r-none h-[40px]"
                                style={{ width: `${manPer}%` }}
                            />
                        </div>
                        <div className="mr-[-51px]">
                            <div className="m-7 flex items-center">
                                <TbRectangleFilled className="text-white bg-[#F7AD19] text-lg p-3" />
                                <p className="ml-3 text-xl">Women</p>
                            </div>
                            <div className="m-7 flex items-center">
                                <TbRectangleFilled className="text-white bg-[#429EBD] text-lg p-3" />
                                <p className="ml-3 text-xl">Men</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default ReposGender;
