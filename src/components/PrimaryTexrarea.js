import React from "react";

const PrimaryTextarea = ({ value, callback, placeholder }) => {
    return (
        <div className="app-textarea">
            <textarea
                className="app-textarea__textarea"
                value={value}
                onChange={callback}
                placeholder={placeholder}/>
        </div>
    )
}

export default PrimaryTextarea;