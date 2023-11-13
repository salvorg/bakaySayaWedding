import React, {useEffect, useState} from "react";
import {gsap} from "gsap";
import {Observer} from "gsap/Observer";

gsap.registerPlugin(Observer);

const ObserverCarousel = () => {
    const [state, setState] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const headers = [
        "Бакай и Жансая",
        "Женимся по любви",
        "Место проведения",
        "Осталось до начала:",
        "Форма"
    ];
    const sections = document.querySelectorAll("section");
    const images = document.querySelectorAll(".bg");

    console.log('state: ', state);

    const moveDown = (state) => {
        console.log('state down: ', state);
        if (state > 0) {
            setState(state - 1);
        }
    }

    const moveUp = (state) => {
        console.log('state up: ', state);
        if (state < 4) {
            setState(state + 1);
        }
    }

    useEffect(() => {
        const tl = gsap.timeline();

        if (!isAnimating) {
            setIsAnimating(true);

            tl.to(images[state], {opacity: 0, duration: 0.1})
                .set(sections, {visibility: "hidden"})
                .set(sections[state], {visibility: "visible"})
                .fromTo(images[state], {opacity: 0}, {opacity: 1, duration: 0.6})
                .call(() => {setIsAnimating(false);
                });

            gsap.set(sections, {visibility: "hidden"});
            gsap.set(sections[state], {visibility: "visible"});
        }
    }, [state]);

    // Observer.create({
    //     target: window,
    //     type: "pointer",
    //     onUp: () => {
    //         if (state) {
    //             moveUp(state);
    //         }
    //     },
    //     onDown: () => {
    //         if (state) {
    //             moveDown(state);
    //         }
    //     },
    //     wheelSpeed: -1,
    // });

    return (
        <main>
            <header>
                {/*<audio src="https://beardbarnmusicbucket.s3.amazonaws.com/The+Wild+Horse" />*/}
                {/*<audio controls>*/}
                {/*    <source src="https://beardbarnmusicbucket.s3.amazonaws.com/The+Wild+Horse" type="audio/mp3" />*/}
                {/*</audio>*/}
                {/*<div>Бакай</div>*/}
                {/*<div>Жансая</div>*/}
            </header>
            {Array.from({length: 5}, (_, index) => (
                <section
                    key={index}
                    className={`section section-${index + 1}`}
                >
                    <div className="outer">
                        <div className="inner">
                            <div className="bg">
                                {state === 0 ? null :  <button className="move-up-btn btn-swipe" onClick={() => moveDown(state)}>перейти вверх</button>}
                                <h2 className="section-heading">{headers[index]}</h2>
                                {state === 4 ? null :  <button className="move-down-btn btn-swipe" onClick={() => moveUp(state)}>перейти вниз</button>}
                            </div>
                        </div>
                    </div>
                </section>
            ))}
        </main>
    );
};

export default ObserverCarousel;