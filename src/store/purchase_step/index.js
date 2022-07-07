import { SET_STEP } from './actions'

const defaultState = 'CARD';

export const getStep = state => state;

const stepperReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_STEP:
            return action.payload
        default:
            return state;
    }
}

export default stepperReducer;