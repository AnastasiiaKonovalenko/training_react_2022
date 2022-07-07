import React from "react";
import futuristic_wireless from '../../../assets/main.png'

const WirelessSpeaker = () => {
    return(
        <div className="d-flex app-head">
            <div className="app-head__heading-wrap">
                <h1
                    className="app-heading-h1 app-head__heading-h1">
                    Futuristic Wireless Speaker
                </h1>
                <p className="app-head__text">
                    Luna’s performance is balanced
                    and smooth in all frequency ranges
                    which makes the music both naturally
                    pleasant and distinctly more layered.
                </p>
            </div>
            <div className="app-head__img-wrap">
                <img
                    className="app-head__img"
                    src={futuristic_wireless}
                    alt="Futuristic Wireless Speaker"/>
            </div>
        </div>
    )
}

export default WirelessSpeaker;