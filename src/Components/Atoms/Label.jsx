import React from 'react';
const Label = ({ children, paddingY }) => {
    return (
        <label
            className={`${paddingY} block mb-2 text-sm font-medium text-gray-900`}
        >
            {children}
        </label>
    );
};

export default Label