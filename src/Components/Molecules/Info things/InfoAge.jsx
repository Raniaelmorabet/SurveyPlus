import React, { useContext, useState ,useEffect } from 'react';
import { FaCircle } from 'react-icons/fa';
import Data_Context from '../../../Context/dataContext';

function InfoAge() {
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
                const newAgeRange = { ...prevData.ageRange };
                // Increment the new selection
                newAgeRange[selectedOption] = newAgeRange[selectedOption] + 1;
                // Restore the previous selection if there was one
                if (previousOption !== null) {
                    newAgeRange[previousOption] = newAgeRange[previousOption] - 1;
                }
                return {
                    ...prevData,
                    ageRange: newAgeRange
                };
            });
        }
    }, [selectedOption, previousOption, setDocumentData]);


    return (
        <>
            <div className="pb-12">
                <h3 className="flex justify-center font-semibold items-center underline p-4 text-[#042B29] text-2xl">
                    Please enter your age range
                </h3>
                <div className="flex justify-center items-center">
                    <div className={`m-5 flex items-center ${selectedOption === '0-15' ? 'text-black' : ''}`}>
                        <input
                            type="radio"
                            id="ageRange0-15"
                            name="ageRange"
                            checked={selectedOption === '0-15'}
                            onChange={() => handleOptionSelect('0-15')}
                        />
                        <label htmlFor="ageRange0-15" className="pl-1 w-20 text-lg">0-15</label>
                    </div>

                    <div className={`m-5 pl-5 flex items-center ${selectedOption === '16-20' ? 'text-black' : ''}`}>
                        <input
                            type="radio"
                            id="ageRange16-20"
                            name="ageRange"
                            checked={selectedOption === '16-20'}
                            onChange={() => handleOptionSelect('16-20')}
                        />
                        <label htmlFor="ageRange16-20" className="pl-1 w-20 text-lg">16-20</label>
                    </div>

                    <div className={`m-5 pl-5 flex items-center ${selectedOption === '21-35' ? 'text-black' : ''}`}>
                        <input
                            type="radio"
                            id="ageRange21-35"
                            name="ageRange"
                            checked={selectedOption === '21-35'}
                            onChange={() => handleOptionSelect('21-35')}
                        />
                        <label htmlFor="ageRange21-35" className="pl-1 w-20 text-lg">21-35</label>
                    </div>

                    <div className={`m-5 pl-5 flex items-center ${selectedOption === '36-50' ? 'text-black' : ''}`}>
                        <input
                            type="radio"
                            id="ageRange36-50"
                            name="ageRange"
                            checked={selectedOption === '36-50'}
                            onChange={() => handleOptionSelect('36-50')}
                        />
                        <label htmlFor="ageRange36-50" className="pl-1 w-20 text-lg">36-50</label>
                    </div>

                    <div className={`m-5 pl-5 flex items-center ${selectedOption === '51-70' ? 'text-black' : ''}`}>
                        <input
                            type="radio"
                            id="ageRange51-70"
                            name="ageRange"
                            checked={selectedOption === '51-70'}
                            onChange={() => handleOptionSelect('51-70')}
                        />
                        <label htmlFor="ageRange51-70" className="pl-1 w-20 text-lg">51-70</label>
                    </div>

                    <div className={`m-5 flex items-center ${selectedOption === '70-90' ? 'text-black' : ''}`}>
                        <input
                            type="radio"
                            id="ageRange70-90"
                            name="ageRange"
                            checked={selectedOption === '70-90'}
                            onChange={() => handleOptionSelect('70-90')}
                        />
                        <label htmlFor="ageRange70-90" className="pl-1 w-20 text-lg">70-90</label>
                    </div>
                </div>
            </div>
        </>
    );
}

export default InfoAge;
