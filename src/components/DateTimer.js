import React, {useEffect, useState} from 'react';

const DateTimer = () => {
    const countDownDate = new Date('Nov 30, 2023 00:00:00').getTime();
    const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeRemaining(calculateTimeRemaining());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    function calculateTimeRemaining() {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

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