import React, { useState } from 'react';

const ColorPanel = ({ colors }) => {
    const [productColor, setProductColor] = useState(colors[0]);

    const className = 'color-panel__item rounded-circle d-flex justify-content-center align-items-center'

    return (
        <div className="color-panel d-flex flex-column align-items-center">
            <div className="d-flex">
                {colors.map((item) => {
                    return (
                        <div
                            style={{borderColor: productColor.hex === item.hex ? item.hex : "transparent"}}
                            className={className}
                            onClick={() => setProductColor(item)}>
                            <div
                                style={{backgroundColor: item.hex}}
                                className="color-panel__item-inner rounded-circle"/>
                        </div>
                    )
                })}
            </div>
            <div className="color-panel__text">{productColor.title}</div>
        </div>
    );
};

export default ColorPanel;