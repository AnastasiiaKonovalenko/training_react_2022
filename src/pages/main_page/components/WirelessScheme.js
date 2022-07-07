import React from "react";
import wireless_example from "../../../assets/wireless_example.png";
import ButtonPlus from "../../../components/ButtonPlus";
import {connect} from "react-redux";
import * as selectors from "../../../store/rootReducer";
import * as switchBtnAction from "../../../store/wireless_map/actions";

const buttons = [
    {
        type: 1,
        text: 'Control button ring ornament',
        coords: { top: '15', left: '8' }
    },
    {
        type: 2,
        text: 'Control button ring ornament',
        coords: { top: '45', left: '20' }
    },
    {
        type: 3,
        text: 'Control button ring ornament',
        coords: { top: '38', left: '26' }
    },
    {
        type: 4,
        text: 'Control button ring ornament',
        coords: { top: '14', left: '33' }
    },
    {
        type: 5,
        text: 'Control button ring ornament',
        coords: { top: '57', left: '38' }
    },
    {
        type: 6,
        text: 'Control button ring ornament',
        coords: { top: '25', left: '52' }
    },
    {
        type: 7,
        text: 'Control button ring ornament',
        coords: { top: '42', left: '60' }
    },
    {
        type: 8,
        text: 'Control button ring ornament',
        coords: { top: '31', left: '75' }
    },
    {
        type: 9,
        text: 'Control button ring ornament',
        coords: { top: '23', left: '86' }
    },
    {
        type: 10,
        text: 'Control button ring ornament',
        coords: { top: '39', left: '90' }
    },
    {
        type: 11,
        text: 'Control button ring ornament',
        coords: { top: '31', left: '95' }
    }
];

const WirelessScheme = ({ activeBtn, setBtn }) => {
    const setHeight = (payload) => {
        return `${(1 - payload.top/100) * 300 }px`
    }

    return (
        <div className="technology__img">
            <div className="technology__img-wrap">
                <img
                    src={wireless_example}
                    alt="wireless technology"/>

                {buttons.map((item, idx) => (
                    <div
                        key={idx}
                        className="technology__btn"
                        style={{top: `${item.coords.top}%`, left: `${item.coords.left}%`}}>
                        <ButtonPlus
                            onClickHandle={() => setBtn(item.type)}
                            isActive={ item.type === activeBtn.type }>
                        </ButtonPlus>
                        <div
                            className={item.type === activeBtn.type ? "line" : "line line-hide"}
                            style={{height: setHeight(item.coords)}}>
                            <div className={item.type === activeBtn.type
                                ? "line__text"
                                : "line__text-hide"}>
                                {item.text}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default connect(
    state => ({
        activeBtn: selectors.getActiveMapBtn(state)
    }),
    {
        setBtn: switchBtnAction.setActiveMapBtn
    })(WirelessScheme);