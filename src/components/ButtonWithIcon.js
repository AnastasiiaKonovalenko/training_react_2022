import React from "react";

const ButtonWithIcon = ({callback, children}) => {
    return (
        <button
            type="button"
            onClick={callback}>
            {children}
        </button>
    )
}

export default ButtonWithIcon;