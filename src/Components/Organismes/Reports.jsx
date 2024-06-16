import ReposGender from "../Molecules/Info things/Repot Stats/ReposGender";
import ReposAge from "../Molecules/Info things/Repot Stats/RepsAge";
import ReposCountry from "../Molecules/Info things/Repot Stats/ReposCountry";
import React from 'react';

function Reports({data}) {
    return (
        <>
            <ReposGender manRepo={data.man} womanRepo={data.woman} />
            <ReposAge ageRange={data.ageRange} />
            <ReposCountry countryRange={data.Country} />
        </>
    );
}
export default Reports;
