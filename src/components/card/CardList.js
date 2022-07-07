import React from "react";
import CardItem from "./CardItem";

const CardList = ({title , list}) => {
    return (
        <div className="app-card">
            <h3 className="app-card__title">{title}</h3>

            <div>
                {list.map((item, idx) => (
                    <CardItem
                        key={idx}
                        item={item}/>
                ))}
            </div>
        </div>
    )
}

export default CardList;