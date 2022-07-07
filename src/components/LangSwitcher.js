import React from 'react';
import { connect } from "react-redux";
import * as switchLangAction  from '../store/switch_lang/actions'
import * as selectors from '../store/rootReducer';

const languages = {
    ua: 'ua',
    en: 'en'
}

const LangSwitcher = ({ lang, switchLang }) => {
    return (
        <div className="lang-switcher">
            <button
                className={lang === languages.en
                    ? 'secondary-app-btn'
                    : 'secondary-app-btn secondary-app-btn__inactive'}
                onClick={() => switchLang(languages.en)}>
                EN
            </button>
            /
            <button
                className={lang === languages.ua
                    ? 'secondary-app-btn'
                    : 'secondary-app-btn secondary-app-btn__inactive'}
                onClick={() => switchLang(languages.ua)}>
                UA
            </button>
        </div>
    )
}

export default connect(
    state => ({
        lang: selectors.getLang(state)
    }),
    {
        switchLang: switchLangAction.switchLang
    }

)(LangSwitcher)