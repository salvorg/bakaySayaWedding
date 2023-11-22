import React, {useEffect, useState} from 'react';
import axiosApi from "../axios-api";

const GuestList = () => {
    const [state, setState] = useState([]);

    useEffect(  () => {
        const fetchData = async () => {
            try {
                const response = await axiosApi.get('/guests.json');
                const guestsArray = Object.entries(response.data).map(([key, value]) => ({
                    id: key,
                    ...value,
                }));
                setState(guestsArray);
                console.log(guestsArray);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const deleteGuestHandler = async (id) => {
        try {
            const confirmResult = window.confirm('Вы точно хотите удалить этого гостя из списка?');

            if (confirmResult) {
                await axiosApi.delete('/guests/' + id + '.json');
                alert('Гость успешно удален из списка');
                setState(prevState => prevState.filter(item => item.id !== id));
            }
        } catch (e) {
            throw new Error(e);
        }
    };

    return (
        <div className="main-block">
            <h3>Список гостей:</h3>
            <ol>
            {state.map((item) => (
                <li key={item.id} id={item.id}>
                    <strong>{item.firstName + ' ' + item.lastName}</strong>
                    <p>{item.pair === '' ? 'не указали' : item.pair === 'single' ? 'один/одна' : 'в паре'}</p>
                    <button onClick={() => deleteGuestHandler(item.id)}>удалить</button>
                </li>
                ))}
            </ol>
        </div>
    );
};

export default GuestList;