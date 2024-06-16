import Information from "../Organismes/Informations.jsx"
import { Button } from "../Atoms/Button.jsx";
import React from 'react';


function UserInfo(){
    return(
        <>
        <h1 className="text-3xl text-center py-[60px] font-bold">User Information</h1>
        <div className=" mx-auto max-w-screen-lg bg-[#5EB7BF]/20 rounded-lg px-[100px] shadow-lg pb-[30px]" >
            <Information/>
         
            <div className='ml-[705px]'>
                <Button paddingY='py-3' paddingX='px-8' marginX='ml-[48px]' bgColor="bg-[#042B29]">Submit</Button>
            </div>
        </div>

        </>
    )
}
export default UserInfo
