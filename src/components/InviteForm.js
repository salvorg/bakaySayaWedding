import React, {useState} from 'react';
import axiosApi from "../axios-api";

const InviteForm = () => {
    const [state, setState] = useState({firstName: '', lastName: '', pair: ''});
    const [isSend, setIsSend] = useState(false);
    const [error, setError] = useState(null);

    const onSubmit = async (event) => {
        event.preventDefault();

        try {
            if (!state.firstName || !state.lastName) {
                setError('Имя и фамилия не могут быть пустыми');
                return;
            }
            await axiosApi.post('/guests.json', state);
        } finally {
            setIsSend(true);
        }
    };

    const formHandler = (event) => {
        const {name, value} = event.target;

        const regex = /^[А-Яа-яA-Za-z]+$/;

        if (name === 'firstName' || name === 'lastName') {
            if (!regex.test(value)) {
                setError('Имя и фамилия должны быть на русском языке');
            } else {
                setError(null);
            }
        }
        setState(prevState => ({ ...prevState, [name]: value }));
    }

    return (
        <form onSubmit={onSubmit}>
            <fieldset className="invite-form-main-block">
                <legend>Заполните все поля:</legend>
                <label htmlFor="firstName">Ваше имя:</label>
                <input id="firstName" type="text" name="firstName" onChange={formHandler}/>
                <label htmlFor="lastName">Ваша фамилия:</label>
                <input id="lastName" type="text" name="lastName" onChange={formHandler}/>
                <label htmlFor="pairSingle">
                    <input
                        id="pairSingle"
                        type="radio"
                        name="pair"
                        value="single"
                        onClick={formHandler}
                    />
                    Я буду один/одна
                </label>
                <label htmlFor="pairNotSingle">
                    <input
                        id="pairNotSingle"
                        type="radio"
                        name="pair"
                        value="not-single"
                        onClick={formHandler}
                    />
                    Я буду не один/одна
                </label>
                <button type="submit" disabled={isSend}>{isSend ? "Отправлено" : "Отправить"}</button>
            </fieldset>
            {error && <div style={{margin: '5px auto', color: 'red', maxWidth: '280px', textAlign: 'center'}}>{error}</div>}
        </form>
    );
};

export default InviteForm;