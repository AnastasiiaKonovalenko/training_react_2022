import React from "react";
import PrimaryInput from "./PrimaryInput";
import PrimaryTextarea from "./PrimaryTexrarea";
import MainButton from "./MainButton";

const MainForm = ({
        inputValue,
        inputCallback,
        inputPlaceholder,
        textareaValue,
        textareaCallback,
        textareaPlaceholder,
        submitCallback,
        submitBtnName
    }) => {
    return (
        <form onSubmit={submitCallback}>
            <div className="mb-4">
                <PrimaryInput
                    value={inputValue}
                    callback={inputCallback}
                    placeholder={inputPlaceholder}/>
            </div>

            <div className="mb-4">
                <PrimaryTextarea
                    value={textareaValue}
                    callback={textareaCallback}
                    placeholder={textareaPlaceholder} />
            </div>

            <MainButton
                additionalClassName="success-app-btn"
                name={submitBtnName}
                type="submit"/>
        </form>

    )
}

export default MainForm;