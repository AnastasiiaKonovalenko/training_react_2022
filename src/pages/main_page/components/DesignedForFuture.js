import React from "react";
import Subheading from "../../../components/Subheading";

const DesignedForFuture = () => {
    return (
        <div className="designed-block d-flex justify-content-center">
            <div className="designed-block__header">
                <div className="designed-block__heading">
                    <Subheading title="DESIGNED FOR THE FUTURE"/>
                </div>
            </div>
            <p className="designed-block__text ms-4">
                In 2014, a group of geeky industrial designers,
                engineering veterans and acoustic experts formed crazybaby.
                This is a bunch of passionate people who are crazy enough to
                think they can challenge the industry with disruptive audio products.
            </p>
        </div>
    )
}

export default DesignedForFuture;