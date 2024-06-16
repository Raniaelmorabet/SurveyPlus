import Chart from 'chart.js/auto';
import React from 'react';
import { useEffect, useRef } from 'react';
import {TbRectangleFilled} from "react-icons/tb";

function RepsAge({ageRange}) {
    const chartRef = useRef(null);

    const colorMapping = {
        "51-70": '#053F5C',
        "36-50": '#429EBD',
        "21-35": '#9FE7F5',
        "0-15": '#F7AD19',
        "16-20": '#F27F0C'
    };

    useEffect(() => {
        const ctx = chartRef.current.getContext('2d');
        if (!ageRange) return
        const data = Object.values(ageRange)
        const labels = Object.keys(ageRange);
        const backgroundColor = Object.keys(ageRange).map(ageRange => colorMapping[ageRange]);
        const borderColor = backgroundColor;
        const myChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: labels,
                datasets: [{
                    data: data,
                    backgroundColor: backgroundColor,
                    borderColor: borderColor,
                    borderWidth: 1
                }]
            },
            options: {
                responsive: false,
            }
        });

        return () => {
            myChart.destroy();
        };
    }, [ageRange]);

    return (
        <>
            <div className=" mx-auto max-w-screen-lg bg-[#5EB7BF]/20 rounded-lg px-[100px] shadow-lg p-[30px] my-[50px] ">

                <h1 className="text-3xl text-center text-[#042B29]  font-semibold">Age Report</h1>
                <div className='w-[50px] flex flex-row  '>
                    <canvas ref={chartRef}
                            className='w-[350px] h-[400px] flex justify-center items-center mx-auto'>
                    </canvas>
                    <div className="ml-[166px]">
                        <div className="m-7 flex items-center">
                            <TbRectangleFilled className="text-white bg-[#053F5C] text-lg p-3 "/>
                            <p className="ml-3 w-10 text-lg">0-15</p>
                        </div>
                        <div className="m-7 flex items-center">
                            <TbRectangleFilled className="text-white bg-[#429EBD] text-lg p-3 "/>
                            <p className="ml-3 w-16 text-lg">16-20</p>
                        </div>
                        <div className="m-7 flex items-center">
                            <TbRectangleFilled className="text-white bg-[#9FE7F5] text-lg p-3 "/>
                            <p className="ml-3 w-16 text-lg ">21-35</p>
                        </div>
                        <div className="m-7 flex items-center">
                            <TbRectangleFilled className="text-white bg-[#F7AD19] text-lg p-3 "/>
                            <p className="ml-3 w-16 text-lg">36-50</p>
                        </div>
                        <div className="m-7 flex items-center">
                            <TbRectangleFilled className="text-white bg-[#F27F0C] text-lg p-3 "/>
                            <p className="ml-3 w-16 text-lg">51-70</p>
                        </div>
                        <div className="m-7 flex items-center">
                            <TbRectangleFilled className="text-white bg-[#E95519] text-lg p-3 "/>
                            <p className="ml-3 w-16 text-lg">70-90</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default RepsAge;