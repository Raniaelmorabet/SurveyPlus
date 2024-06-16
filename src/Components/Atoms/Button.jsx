import React from 'react';

export function Button({addnewComponent,children, bgColor, paddingX, paddingY ,marginX,marginY }) {
    return(
        <button
            type="button"
            onClick={addnewComponent}
            className={`text-white focus:outline-none font-medium rounded-lg text-sm  text-center ${marginX} ${marginY} ${paddingY} ${paddingX} ${paddingY} ${bgColor}`}>
            {children}
        </button>
    );
}