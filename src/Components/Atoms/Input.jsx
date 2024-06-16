import React from 'react'

const Input = ({ref,SetTitle,value,paddigY,paddingX,w ,placeholder,bgColor,raduis,bboreder,marginX,marginY, borderColor, rounded}) => {
    return (
        <input
            value={value}
            ref={ref}
            onChange={SetTitle}
            type="text"
            placeholder={placeholder}
            className={`block w-96 ${w} ${paddigY} ${paddingX}${marginX} ${marginY} ${raduis} ${bboreder} ${rounded} ${borderColor} bg-gray-50 outline-none focus:outline-none text-gray-900 ${bgColor}`}/>
    )
}

export default Input