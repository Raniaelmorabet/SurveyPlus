import SurveyLogo from "/src/Assets/NavBar-images/SurveyLogo.png";
import { Button } from "../Atoms/Button.jsx";
import {Link, useLocation} from "react-router-dom";
import React from 'react';
export default function NavBar() {
    const location = useLocation();
    return (
        <>
            <nav className="bg-[#6DBEC5] fixed h-28 w-full z-20 shadow-xl top-[-17px]">
                <div className="flex flex-wrap items-center justify-around mx-auto py-4">
                    <Link to='/' className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={SurveyLogo} className="h-24 w-28" alt="Survey Logo" />
                    </Link>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <Button paddingY='py-3' paddingX='px-6' bgColor="bg-[#042B29]"><Link to="/createSurvey">Create Survey</Link></Button>
                        <button
                            data-collapse-toggle="navbar-sticky"
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-[#042B29] md:hidden"
                            aria-controls="navbar-sticky"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 17 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 1h15M1 7h15M1 13h15"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="items-center justify-between  hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-36 rtl:space-x-reverse md:flex-row md:mt-0 ">
                            <li>
                                <Link
                                    id='home'
                                    to="/"
                                    spy={true.toString()}
                                    className={`block text-lg text-white duration-500 md:bg-transparent md:p-0 ${location.pathname === '/' ? 'active' : ''}`}
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    id='About'
                                    to="/AboutUs"
                                    spy={true.toString()}
                                    className={`block text-lg duration-500 text-white md:p-0 ${location.pathname === '/AboutUs' ? 'active' : ''}`}
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    id='contact'
                                    to="/Contact"
                                    spy={true.toString()}
                                    className={`block text-lg duration-500 text-white md:p-0 ${location.pathname === '/Contact' ? 'active' : ''}`}
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}