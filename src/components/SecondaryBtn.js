import React from "react";

export default function SecondaryBtn({handleBtnClick, className, children}) {
    return (
        <button
            className={`secondary-app-btn ${className}`}
            onClick={handleBtnClick}>
            { children }
        </button>
    )
}