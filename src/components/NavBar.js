import React from "react";
import { connect } from "react-redux";
import SecondaryBtn from "./SecondaryBtn";
import * as switchTabActions from '../store/active_menu_tab/actions';
import * as selectors from "../store/rootReducer";

const NavBar = ({ activeTab, switchTab }) => {
    const setClassMenuItem = (name) => name === activeTab.name
        ? 'navbar__item navbar__item-active'
        :  'navbar__item';

    const setActiveMenuItem = (name) => switchTab({ name });

    return(
        <div className="d-flex justify-content-center">
            <SecondaryBtn
                handleBtnClick={() => setActiveMenuItem('OUR STORY')}
                className={`ms-4 ${setClassMenuItem('OUR STORY')}`}>
                OUR STORY
            </SecondaryBtn>

            <SecondaryBtn
                handleBtnClick={() => setActiveMenuItem('ABOUT US')}
                className={setClassMenuItem('ABOUT US')}>
                ABOUT US
            </SecondaryBtn>

            <SecondaryBtn
                handleBtnClick={() => setActiveMenuItem('TECHNOLOGY')}
                className={setClassMenuItem('TECHNOLOGY')}>
                TECHNOLOGY
            </SecondaryBtn>

            <SecondaryBtn
                handleBtnClick={() => setActiveMenuItem('FEATURES')}
                className={setClassMenuItem('FEATURES')}>
                FEATURES
            </SecondaryBtn>

            <SecondaryBtn
                handleBtnClick={() => setActiveMenuItem('GET IN TOUCH')}
                className={setClassMenuItem('GET IN TOUCH')}>
                GET IN TOUCH
            </SecondaryBtn>
        </div>
    )
}

export default connect(
    state => ({ activeTab: selectors.getActiveNavBarItem(state) }),
    { switchTab: switchTabActions.setActiveNavBarTab }
)(NavBar)