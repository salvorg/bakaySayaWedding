import React, {useState} from 'react';
import axiosApi from "../axios-api";

const InviteForm = () => {
    const [state, setState] = useState({firstName: '', lastName: '', pair: ''});
    const [isSend, setIsSend] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();

        try {
            await axiosApi.post('/guests.json', state);
        } finally {
            setIsSend(true);
        }
    };

    const formHandler = (event) => {
        const {name, value} = event.target;
        setState(prevState => ({ ...prevState, [name]: value }));
    }

    return (
        <>
            {
                !isSend ? (
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
                            <button type="submit" disabled={isSend}>Отправить</button>
                        </fieldset>
                    </form>
                ) : (
                    <div className="invite-form-alternate-block">Спасибо, что заполнили!</div>
                )
            }
        </>
    );
};

export default InviteForm;