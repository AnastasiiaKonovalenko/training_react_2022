import { combineReducers } from 'redux';
import langSwitchReducer, * as langSelectors from './switch_lang';
import navbarSwitchReducer, * as navBarSelectors from "./active_menu_tab";
import mapBtnSwitchReducer, * as mapBtnSelectors from './wireless_map';
import stepperReducer, * as stepperSelectors from "./purchase_step";

export const getLang = state => langSelectors.getLang(state.lang);
export const getActiveNavBarItem = state => navBarSelectors.getActiveTab(state.activeNavBarTab);
export const getActiveMapBtn = state => mapBtnSelectors.getActiveBtn(state.activeMapBtn)
export const getStep = state => stepperSelectors.getStep(state.step);

const rootReducer = combineReducers({
    lang: langSwitchReducer,
    activeNavBarTab: navbarSwitchReducer,
    activeMapBtn: mapBtnSwitchReducer,
    step: stepperReducer
})

export default rootReducer;