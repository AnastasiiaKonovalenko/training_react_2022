import React from "react";

const CardItem = ({ item }) => {
    return (
        <div className="app-card__item">
            {item.text}
        </div>
    )
}

export default CardItem;