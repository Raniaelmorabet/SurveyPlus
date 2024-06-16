import React from 'react';
export function Footer() {
    return (
        <footer className=" left-0 bottom-0 absolute right-0 w-full bg-[#6DBEC5] shadow">
            <div className="w-full max-w-screen-xl mx-auto p-2 my-2">
                <hr className="my-4 border-gray-200 sm:mx-auto lg:my-6" />
                <span className="block text-sm text-[#042B29]/80 sm:text-center">&copy; 2024 <a className="hover:underline">Survey .</a> All Rights Reserved.</span>
            </div>
        </footer>
    );
}
