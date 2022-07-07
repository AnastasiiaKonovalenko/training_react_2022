import React from "react";

const StepperPoint = ({ children, onClick }) => {


    return (
        <div
            onClick={onClick}
            className="stepper-item d-flex flex-column justify-content-center align-items-center">
            { children }
        </div>
    )
}

export default StepperPoint;