import React, {useEffect, useState} from "react";
import {gsap} from "gsap";
import {Observer} from "gsap/Observer";
import DateTimer from "../components/DateTimer";
import MapComponent from "../components/MapComponent";
import InviteForm from "../components/InviteForm";
import Player from "../components/Player";

gsap.registerPlugin(Observer);

const ObserverCarousel = () => {
    const [state, setState] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const headers = [
        "Свадьба Бакай и Жансая",
        "Женимся по любви",
        "Место проведения",
        "Осталось до начала:",
        "Форма"
    ];
    const sections = document.querySelectorAll("section");
    const images = document.querySelectorAll(".bg");

    const moveDown = (state) => {
        if (state > 0) {
            setState(state - 1);
        }
    }

    const moveUp = (state) => {
        if (state < 3) {
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
                .fromTo(images[state], {opacity: 0}, {opacity: 1, duration: 0.1})
                .call(() => {setIsAnimating(false);
                });

            gsap.set(sections, {visibility: "hidden"});
            gsap.set(sections[state], {visibility: "visible"});
        }
    }, [state]);

    return (
        <main className="main">
            <Player />
            <section
                className={`section section-1`}
            >
                <div className="outer">
                    <div className="inner">
                        <div className="bg">
                            <h2 className="section-heading">Свадьба <br /> Бакая и Жансаи</h2>
                            <button className="move-down-btn btn-swipe" onClick={() => moveUp(state)}>перейти вниз</button>
                        </div>
                    </div>
                </div>
            </section>
            <section
                className={`section section-2`}
            >
                <div className="outer">
                    <div className="inner">
                        <div className="bg">
                            <button className="move-up-btn btn-swipe exclude-swipe" onClick={() => moveDown(state)}>перейти вверх</button>
                            <h2 className="section-heading">{headers[1]}</h2>
                            <InviteForm />
                            <button className="move-down-btn btn-swipe" onClick={() => moveUp(state)}>перейти вниз</button>
                        </div>
                    </div>
                </div>
            </section>
            <section
                className={`section section-3`}
            >
                <div className="outer">
                    <div className="inner">
                        <div className="bg">
                           <button className="move-up-btn btn-swipe" onClick={() => moveDown(state)}>перейти вверх</button>
                            <h2 className="section-heading">Royal Hall</h2>
                            <p>Адрес: с.Кок-Жар, ул. Мадиева 18</p>
                            <MapComponent />
                            <button className="move-down-btn btn-swipe" onClick={() => moveUp(state)}>перейти вниз</button>
                        </div>
                    </div>
                </div>
            </section>
            <section
                className={`section section-4`}
            >
                <div className="outer">
                    <div className="inner">
                        <div className="bg">
                            <button className="move-up-btn btn-swipe" onClick={() => moveDown(state)}>перейти вверх</button>
                            <h2 className="section-heading">{headers[3]}</h2>
                            <DateTimer />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ObserverCarousel;