import React from 'react';
import {ReactComponent as AppLogo} from '../icons/logo.svg'
import MainButton from "./MainButton";
import LangSwitcher from "./LangSwitcher";
import SecondaryBtn from "./SecondaryBtn";
import { useNavigate, useLocation } from "react-router-dom";

function Header() {
    const navigate = useNavigate();
    const location = useLocation();

    const buyProductHandler = () => navigate("/product");

    return (
        <div className="app-header d-flex justify-content-between align-items-center py-3">
            <div className="d-flex justify-content-start">
                <AppLogo/>
            </div>

            {
                location.pathname === "/"
                    ? (
                        <div className="d-flex align-items-center">
                            <SecondaryBtn
                                name={'SPECS'}
                                handleBtnClick={buyProductHandler}/>

                            <div className="mx-4">
                                <LangSwitcher/>
                            </div>

                            <MainButton
                                name={'BUY'}
                                handleBtnClick={buyProductHandler}/>
                        </div>
                    ) : null
            }
        </div>
    )
}

export default Header;