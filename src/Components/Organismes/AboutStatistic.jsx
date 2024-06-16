import React from "react";

export function AboutStatistic() {
    return (
        <div className="pt-16 my-5 px-12 mx-auto max-w-[1200px]  ">
            <h2 className="mb-9 text-4xl tracking-tight font-extrabold text-center text-[#042B29] ">
                Statistics
            </h2>

            <div className="border-t border-gray-300 flex flex-wrap justify-center items-center  p-10 mx-auto gap-40 cursor-pointer">

                <div className="flex flex-col items-center justify-center">
                    <dt className="mb-2 text-3xl font-extrabold duration-300 hover:text-[#F27F0C] ">1000s</dt>
                    <dd className="text-gray-500 dark:text-gray-400">Open source project</dd>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <dt className="mb-2 text-3xl font-extrabold duration-300 hover:text-[#F27F0C]">10M+</dt>
                    <dd className="text-gray-500 dark:text-gray-400">Public survey</dd>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <dt className="mb-2 text-3xl font-extrabold duration-300 hover:text-[#F27F0C]">1B+</dt>
                    <dd className="text-gray-500 dark:text-gray-400">Questions asked</dd>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <dt className="mb-2 text-3xl font-extrabold duration-300 hover:text-[#F27F0C]">4M+</dt>
                    <dd className="text-gray-500 dark:text-gray-400">Active user</dd>
                </div>

            </div>
        </div>

    );
}
