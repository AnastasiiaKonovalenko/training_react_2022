import { navbarMenu } from "../../constants";
import { SET_ACTIVE_NAVBAR_TAB } from "./actions";

const defaultState = navbarMenu[0];

export const getActiveTab = state => state;

const navbarSwitchReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_ACTIVE_NAVBAR_TAB:
            return action.payload
        default:
            return state;
    }
}

export default navbarSwitchReducer;