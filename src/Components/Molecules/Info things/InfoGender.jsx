import React, { useContext, useEffect, useState } from 'react';
import Data_Context from '../../../Context/dataContext';

function InfoGender() {
   const [selectedOption, setSelectedOption] = useState(null);
    const {documentData ,setDocumentData} = useContext(Data_Context)
    const [previousOption, setPreviousOption] = useState(null);
    console.log(documentData.man , documentData.woman ,documentData)
    console.log(selectedOption)

    const handleOptionSelect = (option) => {
        setSelectedOption(option); 
        setPreviousOption(selectedOption);

    };

   useEffect(() => {
        if (selectedOption !== null) {
            setDocumentData((prevData) => {
                const updatedData = { ...prevData };

                if (previousOption !== null) {
                    updatedData[previousOption] = (updatedData[previousOption] || 0) - 1;
                }
                
                updatedData[selectedOption] = (updatedData[selectedOption] || 0) + 1;

                return updatedData;
            });
        }
    }, [selectedOption, previousOption, setDocumentData]);

    return (
        <>
            <div className="pt-12 pb-12">
                <h3 className="flex justify-center font-semibold items-center underline text-[#042B29] p-4 text-2xl">
                    Please enter your gender
                </h3>
                <div className="flex justify-center items-center">
                    <div className={`m-7 flex items-center ${selectedOption === 'Woman' ? 'text-black' : ''}`}>
                        <input
                            type="radio"
                            id="genderWoman"
                            name="gender"
                            checked={selectedOption === 'woman'}
                            onChange={() => handleOptionSelect('woman')}
                        />
                        <label htmlFor="genderWoman" className="ml-3 text-xl">Woman</label>
                    </div>

                    <div className={`m-7 pl-10 flex items-center ${selectedOption === 'Men' ? 'text-black' : ''}`}>
                        <input
                            type="radio"
                            id="genderMen"
                            name="gender"
                            checked={selectedOption === 'man'}
                            onChange={() => handleOptionSelect('man')}
                        />
                        <label htmlFor="genderMen" className="ml-3 text-xl">Men</label>
                    </div>
                </div>
            </div>
        </>
    );
}

export default InfoGender;
