import React from 'react';
import DropDownList from "./DropDownList";


function Form() {
    const [name, setName] = React.useState("");
    const [nameDirty, setNameDirty] = React.useState(false);
    const [nameError, setNameError] = React.useState("Заполните поле");

    const [email, setEmail] = React.useState("");
    const [emailDirty, setEmailDirty] = React.useState(false);
    const [emailError, setEmailError] = React.useState("Заполните поле");

    const [phone, setPhone] = React.useState("");
    const [phoneDirty, setPhoneDirty] = React.useState(false);
    const [phoneError, setPhoneError] = React.useState("Заполните поле");

    const [language, setLanguage] = React.useState("");
    const [languageDirty, setLanguageDirty] = React.useState(false);
    const [languageError, setLanguageError] = React.useState("Выберите язык");

    const [accept, setAccept] = React.useState(false);
    const [acceptDirty, setAcceptDirty] = React.useState(false);
    const [acceptError, setAcceptError] = React.useState("Заполните поле");

    const [formValid, setFormValid] = React.useState(false);

    const [dropDownIsOpen, setDropdownIsOpen] = React.useState(false);

    function dropDownHandler() {
        setDropdownIsOpen(!dropDownIsOpen);
    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case "name":
                setNameDirty(true);
                break;
            case "email":
                setEmailDirty(true);
                break;
            case "phone":
                setPhoneDirty(true);
                break;
            case "language":
                setLanguageDirty(true);
                break;
            case "accept":
                setAcceptDirty(true)
                break
        }
    };

    React.useEffect(() => {
        if (nameError || emailError || phoneError || languageError || acceptError){
            setFormValid(false)
        }
        else {
            setFormValid(true)
        }

    }, [nameError, emailError, phoneError, languageError, acceptError])

    const nameHandler = (e) => {
        setName(e.target.value)
        const re = /^[a-zA-Zа-яА-ЯёЁ'][a-zA-Z-а-яА-ЯёЁ' ]+[a-zA-Zа-яА-ЯёЁ']?$/;
        if(!re.test(String(e.target.value))){
            setNameError("Введено не корректное значение");
            if (!e.target.value) {
                setNameError("Заполните поле");
            }
        }
        else {
            setNameError("");
        }
    };

    const emailHandler = (e) => {
        setEmail(e.target.value);
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(e.target.value).toLowerCase())){
            setEmailError("Введено не корректное значение");
            if (!e.target.value) {
                setEmailError("Заполните поле");
            }
        }
        else {
            setEmailError("");
        }
    };

    const phoneHandler = (e) => {
        setPhone(e.target.value);
        const re = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{11}$/;
        if (!re.test(String(e.target.value))){
            setPhoneError("Введено не корректное значение");
            if (!e.target.value) {
                setPhoneError("Заполните поле");
            }
        }
        else {
            setPhoneError("");
        }
    };

    const languageHandler = (e) => {
        setLanguage(e.target.textContent);
        setDropdownIsOpen(false)
        if (e.target.textContent !== "Язык") {
            setLanguageError("")
        }
    };

    const acceptHandler = (e) => {
        setAccept(e.target.checked);

        if (!e.target.checked) {
            setAcceptError("Заполните поле")
        }
        else {
            setAcceptError("")
        }
    };

    return(
        <form className={"form"}>
            <h1 className={"form__title"}>Регистрация</h1>
            <h2 className={"form__subtitle"}>Уже есть аккаунт? <a className={"form__link"} href="#">Войти</a></h2>

            <div className={"input-container"}>
                <label className={"form__label"} htmlFor="name">Имя</label>
                <input onChange={e => nameHandler(e)} value={name} onBlur={e => blurHandler(e)} name="name" className={"form__input"} id="name" type="text" placeholder="Введите Ваше имя"/>
                {(nameDirty && nameError) && <span className={"form__error"}>{nameError}</span>}
            </div>

            <div className={"input-container"}>
                <label className={"form__label"} htmlFor="email">Email</label>
                <input onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} name="email" className={"form__input"} id="email" type="email" placeholder="Введите ваш email"/>
                {(emailDirty && emailError) && <span className={"form__error"}>{emailError}</span>}
            </div>

            <div className={"input-container"}>
                <label className={"form__label"} htmlFor="phone">Номер телефона</label>
                <input onChange={e => phoneHandler(e)} value={phone} onBlur={e => blurHandler(e)} name="phone" className={"form__input"} id="phone" type="tel" placeholder="Введите номер телефона"/>
                {(phoneDirty && phoneError) && <span className={"form__error"}>{phoneError}</span>}
            </div>

            <div className={"input-container"}>
                <label className={"form__label"} htmlFor="language">Язык</label>
                <input onBlur={e => blurHandler(e)} name="language" className={"form__input form__input_select_language"} placeholder="Язык" id="language" type="text" value={language} readOnly
                   onClick={dropDownHandler}/>
                {(languageDirty && languageError) && <span className={"form__error"}>{languageError}</span>}
                <DropDownList
                    isOpen={dropDownIsOpen}
                    onClick={languageHandler}
                />
            </div>

            <div className={"input-container"}>
                <label className="accept" htmlFor="checkbox">
                    <input onBlur={e => blurHandler(e)} onClick={e => acceptHandler(e)} className={"accept__checkbox"} name="accept" id="checkbox" type="checkbox" checked={accept}/>
                    <span className={"accept__pseudo-item"}/>
                    <p className={"accept__text"}>Принимаю <a className={"form__link"} href="#">условия</a> использования</p>
                    {(acceptError && acceptDirty) && <span className={"form__error form__error_target_accept"}>{acceptError}</span>}
                </label>
            </div>

            <button disabled={!formValid} className={"button"}>Зарегистрироваться</button>
        </form>
    )
}

export default Form;
