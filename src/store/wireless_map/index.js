import { SET_ACTIVE_MAP_BTN } from "./actions";

const defaultStore = { type: 10 };

export const getActiveBtn = state => state;

const mapBtnReducer = (state = defaultStore, action) => {
    switch (action.type) {
        case SET_ACTIVE_MAP_BTN:
            return { type: action.payload }
        default:
            return state;
    }
}

export default mapBtnReducer;