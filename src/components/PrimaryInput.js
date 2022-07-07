import React from "react";

const PrimaryInput = ({ value, callback, placeholder }) => {
    return (
        <div className="app-input">
            <input
                className="app-input__text-field"
                value={value}
                onChange={callback}
                placeholder={placeholder}
                type="text"/>
        </div>
    )
}

export default PrimaryInput