import React from 'react';

function DropDownList({isOpen, onClick}) {

    return(
        <>
            <ul className={`form__list ${isOpen ? "form__list_opened" : ""}`}>
                <li className={"form__list-item"} onClick={onClick}>Русский</li>
                <li className={"form__list-item"} onClick={onClick}>Английский</li>
                <li className={"form__list-item"} onClick={onClick}>Китайский</li>
                <li className={"form__list-item"} onClick={onClick}>Испанский</li>
            </ul>
        </>
    )
}

export default DropDownList;