import React, {useState} from "react";
import Subheading from "../../../components/Subheading";
import MainForm from "../../../components/MainForm";

const Questions = () => {
    const [inputValue, setInputValue] = useState('');
    const [textareaValue, setTextareaValue] = useState('');

    const handlerTextarea = (e) => setTextareaValue(e.target.value);

    const handlerInput = (e) => setInputValue(e.target.value);

    const sendLetter = (e) => {
      e.preventDefault();
      setInputValue('');
      setTextareaValue('')
    }

    return (
        <div className="questions d-flex">
            <div className="questions__heading">
                <Subheading title="DO YOU HAVE ANY QUESTIONS?" />
            </div>

            <div className="questions__form flex-grow-1">
                <MainForm
                    inputValue={inputValue}
                    inputCallback={handlerInput}
                    inputPlaceholder="Your email..."
                    textareaValue={textareaValue}
                    textareaCallback={handlerTextarea}
                    textareaPlaceholder="Your message..."
                    submitCallback={sendLetter}
                    submitBtnName="Send"/>
            </div>
        </div>
    )
}

export default Questions;