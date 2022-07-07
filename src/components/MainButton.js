import React from 'react';

export default function MainButton({name, handleBtnClick, type = 'button', additionalClassName}) {
    const className = additionalClassName
        ? `${additionalClassName} primary-app-btn`
        : 'primary-app-btn';


    return(
        <button
            type={type}
            className={className}
            onClick={handleBtnClick}>
            {name}
        </button>
    )
}