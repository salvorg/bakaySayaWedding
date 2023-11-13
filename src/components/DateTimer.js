import React, {useEffect, useState} from 'react';

const DateTimer = () => {
    const countDownDate = new Date('Dec 02, 2023 17:00:00').getTime();
    const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeRemaining(calculateTimeRemaining());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    function addLeadingZero(value) {
        return value < 10 ? `0${value}` : value;
    }

    function calculateTimeRemaining() {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        const days = addLeadingZero(Math.floor(distance / (1000 * 60 * 60 * 24)));
        const hours = addLeadingZero(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const minutes = addLeadingZero(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
        const seconds = addLeadingZero(Math.floor((distance % (1000 * 60)) / 1000));

        return {
            days,
            hours,
            minutes,
            seconds,
            isExpired: distance < 0,
        };
    }

    if (timeRemaining.isExpired) {
        return <div className="countdown">Время истекло!</div>;
    }

    return (
        <div className="timer-box">
            <div className="item"><div id="day">{timeRemaining.days}</div>дн</div>
            <div className="item"><div id="hour">{timeRemaining.hours}</div>час</div>
            <div className="item"><div id="minute">{timeRemaining.minutes} </div>мин</div>
            <div className="item"><div id="second">{timeRemaining.seconds}</div>сек</div>
        </div>
    );
};

export default DateTimer;