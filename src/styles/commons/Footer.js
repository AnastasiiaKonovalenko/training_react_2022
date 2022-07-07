import React from "react";
import { ReactComponent as AppLogo } from "../../icons/logo.svg";
import { ReactComponent as Facebook } from "../../icons/facebook.svg";
import { ReactComponent as Twitter } from "../../icons/twitter.svg";
import { ReactComponent as Instagram } from "../../icons/instagram.svg";

const Footer = () => {
    return (
        <div className="footer d-flex flex-column justify-content-center align-items-center">
            <AppLogo />

            <div className="footer__links">
                <a href="" target="_blank">
                    <Facebook />
                </a>

                <a href="" target="_blank">
                    <Twitter />
                </a>

                <a href="" target="_blank">
                    <Instagram />
                </a>
            </div>

            <div className="footer__rights">
                © 2019 All rights reserved. Terms of Use & Privacy Policy
            </div>
        </div>
    )
}

export default Footer;