import React, { useContext, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";
import Data_Context from '../../Context/dataContext';

export function ContactCard() {
    const {
        messageSent,
        form,
        setMessageSent
    } = useContext(Data_Context);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_m504osd',
                'template_mov5qf4',
                form.current, {
                    publicKey: 'TfzehO-8vuRJ3vIB9',
                    user_email: e.target.email.value,
                })
            .then(
                () => {
                    console.log('SUCCESS!');
                    setMessageSent(true);
                    e.target.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Your Survey saved successfully",
            showConfirmButton: false,
            timer: 1500
        });
    };

    return (
        <>
            <section>
                <div className="py-8 lg:py-16 px-12 mx-auto max-w-[1000px] bg-[#5EB7BF]/40 rounded-lg shadow-2xl mt-32 ">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-[#042B29] ">
                        Contact Us
                    </h2>
                    <p
                        className="mb-8 lg:mb-16 font-light text-center text-[#042B29]/70 sm:text-xl">
                        Got a technical issue? Want to send feedback about A Specific Survey? Need details about our Survey App ? Let us know.
                    </p>
                    {messageSent && <p className="text-green-500 text-center">Message sent!</p>}
                    <form ref={form} onSubmit={sendEmail} className="space-y-8">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-[#042B29]">
                                Your email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                placeholder="name@gmail.com"
                                name="user_email"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-[#042B29]">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm"
                                placeholder="Let us know how we can help you"
                                name="subject"
                                required
                            />
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-[#042B29]">
                                Your message
                            </label>
                            <textarea
                                id="message"
                                rows="6"
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300"
                                placeholder="Leave a comment..."
                                name="message"
                                required
                            ></textarea>
                        </div>
                        <button onSubmit={sendEmail} className='text-white focus:outline-none font-medium rounded-lg text-sm  text-center bg-ourGreen py-3 px-6'>
                            Respond
                        </button>
                    </form>
                </div>
            </section>
        </>
    );
}