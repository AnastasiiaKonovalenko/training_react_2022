import React from "react";
import Subheading from "../../components/Subheading";
import ColorPanel from "./components/ColorPanel";
import GoodsCounter from "./components/GoodsCounter";
import OutlinedBtn from "../../components/OutlinedBtn";
import wireless_1 from "../../assets/wireless_1.png";
import {ReactComponent as CarLogo } from "../../icons/car.svg";
import MainButton from "../../components/MainButton";

const colors = [
    {
        hex: '#D4D4D4',
        title: 'Silver',
        imgLink: ''
    },
    {
        hex: '#A4A4A4',
        title: 'White Smoke',
        imgLink: ''
    },
    {
        hex: '#A1847D',
        title: 'Hemp',
        imgLink: ''
    },
    {
        hex: '#B4A492',
        title: 'Cloudy',
        imgLink: ''
    },
    {
        hex: '#828387',
        title: 'Light Slate Blue',
        imgLink: ''
    }
]

const ProductCard = () => {
    return (
        <div className="product-card d-flex flex-column align-items-center flex-grow-1">
            <div className="d-flex">
                <div className="product-card__photo">
                    <img
                        src={wireless_1}
                        alt="wireless"
                        className="product-card__img"/>

                </div>

                <div className="product-card__info">
                    <Subheading title="LUNA EYE"/>
                    <div>129 $</div>
                    <ColorPanel
                        colors={colors}/>
                    <GoodsCounter />
                    <OutlinedBtn />
                </div>
                <div>
                    <div>
                        <div>Order Summary</div>
                        <div>Total:</div>
                        <div>129.00 $</div>
                    </div>
                    <MainButton name="CONTINUE"/>
                </div>
            </div>
            <div>
                <CarLogo />
                Free Shipping + Free Returns
            </div>
        </div>
    )
}

export default ProductCard;