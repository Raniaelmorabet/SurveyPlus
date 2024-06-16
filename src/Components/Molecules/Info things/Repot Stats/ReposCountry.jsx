import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { TbRectangleFilled } from "react-icons/tb";

function ReposCountry({ countryRange }) {
    const chartRef = useRef(null);

    const colorMapping = {
        "Africa": '#053F5C',
        "America": '#429EBD',
        "Asia": '#9FE7F5',
        "Australia": '#F7AD19',
        "Europe": '#F27F0C'
    };

    useEffect(() => {
        const ctx = chartRef.current.getContext('2d');
        if (!countryRange) return
        const data = Object.values(countryRange)
        const labels = Object.keys(countryRange);
        const backgroundColor = labels.map(country => colorMapping[country]);
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
    }, [countryRange]);

    return (
        <>
            <div className=" mx-auto max-w-screen-lg bg-[#5EB7BF]/20 rounded-lg px-[100px] shadow-lg p-[30px] " >
                <h1 className="text-3xl text-center text-[#042B29]  font-semibold">Country Report</h1>
                <div className='w-[50px] flex flex-row '>

                    <canvas ref={chartRef}
                            className='w-[350px] h-[400px] flex justify-center items-center mx-auto'></canvas>
                    <div className="ml-[166px]">
                        <div className="m-7 flex items-center">
                            <TbRectangleFilled className="text-white bg-[#053F5C] text-lg p-3 " />
                            <p className="ml-3 text-xl">Africa</p>
                        </div>
                        <div className="m-7 flex items-center">
                            <TbRectangleFilled className="text-white bg-[#429EBD] text-lg p-3 " />
                            <p className="ml-3 text-xl">America</p>
                        </div>
                        <div className="m-7 flex items-center">
                            <TbRectangleFilled className="text-white bg-[#9FE7F5] text-lg p-3 " />
                            <p className="ml-3 text-xl">Asia</p>
                        </div>
                        <div className="m-7 flex items-center">
                            <TbRectangleFilled className="text-white bg-[#F7AD19] text-lg p-3 " />
                            <p className="ml-3 text-xl">Australia</p>
                        </div>
                        <div className="m-7 flex items-center">
                            <TbRectangleFilled className="text-white bg-[#F27F0C] text-lg p-3 " />
                            <p className="ml-3 text-xl">Europe</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default ReposCountry;