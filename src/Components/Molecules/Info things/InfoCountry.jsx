import React, { useContext, useEffect, useState } from 'react';
import Data_Context from '../../../Context/dataContext';


function InfoCountry() {
    const [selectedOption, setSelectedOption] = useState(null);
    const {documentData ,setDocumentData} = useContext(Data_Context)
    const [previousOption, setPreviousOption] = useState(null);
    const handleOptionSelect = (option) => {
        setSelectedOption(option); 
        setPreviousOption(selectedOption);
        
    }; 
    
    useEffect(() => {
        if (selectedOption !== null) {
            setDocumentData((prevData) => {
                const newCountry = { ...prevData.Country };
                // Increment the new selection
                newCountry[selectedOption] = newCountry[selectedOption] + 1;
                // Restore the previous selection if there was one
                if (previousOption !== null) {
                    newCountry[previousOption] = newCountry[previousOption] - 1;
                }
                return {
                    ...prevData,
                    Country: newCountry
                };
            });
        }
    }, [selectedOption, previousOption, setDocumentData]);



    return (
        <>
            <div className="pt-5 pb-12">
                <h3 className="flex justify-center font-semibold items-center underline text-[#042B29] p-4 text-2xl">
                    Where are you from ?
                </h3>
                <div className="flex justify-center items-center">
                    <div className={`m-7 flex items-center ${selectedOption === 'Africa' ? 'text-black' : ''}`}>
                        <input
                            type="radio"
                            id="countryAfrica"
                            name="country"
                            checked={selectedOption === 'Africa'}
                            onChange={() => handleOptionSelect('Africa')}
                        />
                        <label htmlFor="countryAfrica" className="ml-3 text-xl">Africa</label>
                    </div>

                    <div className={`m-7 pl-10 flex items-center ${selectedOption === 'America' ? 'text-black' : ''}`}>
                        <input
                            type="radio"
                            id="countryAmerica"
                            name="country"
                            checked={selectedOption === 'America'}
                            onChange={() => handleOptionSelect('America')}
                        />
                        <label htmlFor="countryAmerica" className="ml-3 text-xl">America</label>
                    </div>

                    <div className={`m-7 pl-10 flex items-center ${selectedOption === 'Asia' ? 'text-black' : ''}`}>
                        <input
                            type="radio"
                            id="countryAsia"
                            name="country"
                            checked={selectedOption === 'Asia'}
                            onChange={() => handleOptionSelect('Asia')}
                        />
                        <label htmlFor="countryAsia" className="ml-3 text-xl">Asia</label>
                    </div>

                    <div className={`m-7 pl-10 flex items-center ${selectedOption === 'Australia' ? 'text-black' : ''}`}>
                        <input
                            type="radio"
                            id="countryAustralia"
                            name="country"
                            checked={selectedOption === 'Australia'}
                            onChange={() => handleOptionSelect('Australia')}
                        />
                        <label htmlFor="countryAustralia" className="ml-3 text-xl">Australia</label>
                    </div>

                    <div className={`m-7 pl-10 flex items-center ${selectedOption === 'Europe' ? 'text-black' : ''}`}>
                        <input
                            type="radio"
                            id="countryEurope"
                            name="country"
                            checked={selectedOption === 'Europe'}
                            onChange={() => handleOptionSelect('Europe')}
                        />
                        <label htmlFor="countryEurope" className="ml-3 text-xl">Europe</label>
                    </div>
                </div>
            </div>
        </>
    );
}

export default InfoCountry;