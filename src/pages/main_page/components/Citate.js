import React from "react";

const Citate = ({ img, name, position, text }) => {
    return (
        <div className="citate d-flex flex-column justify-content-center align-items-center">
            <div className="citate__icon"/>
            <p className="citate__text mt-4">{ text }</p>
            <div className="citate__author d-flex flex-column justify-content-center align-items-center mt-4">
                <img
                    className="citate__img"
                    src={ img }
                    alt={`${ name }, ${ position }`}/>
                <div className="citate__author-name mb-1">{ name }</div>
                <div className="citate__author-position">{ position }</div>
            </div>
        </div>
    )
}

export default Citate;