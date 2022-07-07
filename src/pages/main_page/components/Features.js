import React from "react";
import Subheading from "../../../components/Subheading";
import CardList from "../../../components/card/CardList";
import dynamic from "../../../assets/dinamic.jpg"

const data = [
    {
        title: 'Sound & Music',
        list: [
            { text: 'Feel-in-chest Base Power' },
            { text: 'Lossless Digital Audio Transmission' },
            { text: 'Easy & Stable Stereo Pairing' },
            { text: 'Crisp and Clear High Frequency Sound' },
            { text: 'Streams from Cloud Music and Local Library' },
            { text: 'Auto Music Playback from Last Song Stopped' },
        ]
    },
    {
        title: 'Connectivity',
        list: [
            { text: 'Hands Free Wireless Audio' },
            { text: 'Bluetooth 4.0 LE' },
            { text: 'Wi-Fi 2.4 GHz (802.11 b/g/n)' },
            { text: 'Smart Multiroom System Set Up' },
            { text: 'Party Mode with 6.0 Units and above' },
            { text: 'Powerful MESHNET Multi Speaker Network' },
        ]
    },
    {
        title: 'App Features',
        list: [
            { text: 'Customize Music Schedule' },
            { text: 'Wake Up with Favorite Songs' },
            { text: 'Home Detection Auto Wake Up' },
            { text: 'Color Wheel & Saturation Change' },
        ]
    }
]

const Features = () => {
    return (
        <div className="features">
            <Subheading title="Features" />

            <div className="features__lists">
                <div className="features__img">
                    <img src={dynamic} alt="Dynamic"/>
                </div>

                <div>
                    {data.map((item, idx) => (
                        <div
                            key={idx}
                            className="features__card">
                            <CardList
                                title={item.title}
                                list={item.list}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Features;