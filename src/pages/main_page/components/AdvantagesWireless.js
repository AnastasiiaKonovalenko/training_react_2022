import React from "react";
import AdvantageCard from "./AdvantageCard";
import { ReactComponent as Futuristic } from '../../../icons/futuristic.svg';
import { ReactComponent as Speaker } from "../../../icons/speaker.svg";
import { ReactComponent as  Wireless } from "../../../icons/wireless.svg";
import { ReactComponent as  Sun } from "../../../icons/sun.svg";

const AdvantagesWireless = () => {
    return (
        <div className="d-flex justify-content-center advantages">
            <AdvantageCard>
                <Futuristic />

                <div className="d-flex flex-column justify-content-center mb-5 mt-4">
                    <h2 className="text-center advantage-card__heading">
                        Futuristic Design
                    </h2>
                    <p className="text-center advantage-card__text">
                        To give Luna a truly flawless look, we specifically
                        picked aircraft grade aluminum as its material and
                        adopted both three-dimensional stretch-bending technology
                        and a high precision cold forging technique.
                    </p>
                </div>
            </AdvantageCard>

            <AdvantageCard>
                <Speaker />

                <div className="d-flex flex-column justify-content-center mb-5 ms-4 mt-4">
                    <h2 className="text-center advantage-card__heading">
                        Tweeter Speaker System
                    </h2>
                    <p className="text-center advantage-card__text">
                        To deliver a more layered sound performance better
                        than a sole full-range speaker, our team equipped Luna
                        with one more tweeter speaker responsible for high-frequency
                        sound independently.
                    </p>
                </div>
            </AdvantageCard>

            <AdvantageCard>
                <Wireless />

                <div className="d-flex flex-column justify-content-center mb-5 ms-4 mt-4">
                    <h2 className="text-center advantage-card__heading">
                        Multiroom System
                    </h2>
                    <p className="text-center advantage-card__text">
                        Luna is natively compatible with your home
                        Wi-Fi. Set up multiple speakers in different
                        rooms to expand your music experience into the
                        entire house.
                    </p>
                </div>
            </AdvantageCard>

            <AdvantageCard>
                <Sun />

                <div className="d-flex flex-column justify-content-center mb-5 ms-4 mt-4">
                    <h2 className="text-center advantage-card__heading">
                        Intuitive Lighting System
                    </h2>
                    <p className="text-center advantage-card__text">
                        An intuitive user interface allows you to adjust
                        the hue and saturation of color for lighting that
                        fits any mood and situation.
                    </p>
                </div>
            </AdvantageCard>
        </div>
    )
}

export default AdvantagesWireless;