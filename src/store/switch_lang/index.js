import { SWITCH_LANG } from './actions'

const defaultState = 'en';

export const getLang = state => state;

const langSwitchReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SWITCH_LANG:
            return action.payload
        default:
            return state;
    }
}

export default langSwitchReducer;