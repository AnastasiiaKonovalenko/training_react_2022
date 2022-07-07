import React from 'react';

const ButtonPlus = ({ isActive, onClickHandle, children }) => {
    return (
        <button
            className="secondary-app-btn"
            onClick={onClickHandle}>

            <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M26 52C40.3594 52 52 40.3594 52 26C52 11.6406 40.3594 0 26 0C11.6406 0 0 11.6406 0 26C0 40.3594 11.6406 52 26 52Z" fill={isActive ? '#7C7C7C' : 'none'} />
                <path d="M26 50C39.2548 50 50 39.2548 50 26C50 12.7452 39.2548 2 26 2C12.7452 2 2 12.7452 2 26C2 39.2548 12.7452 50 26 50Z" fill={isActive ? '#333333' : '#0DB2B3'}/>
                <path d="M20 26.0001H32M26 20V32V20Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            { children }
        </button>

    )
}

export default ButtonPlus;