import React, {useEffect, useState} from "react";
import {gsap} from "gsap";
import {Observer} from "gsap/Observer";

gsap.registerPlugin(Observer);

const ObserverCarousel = () => {
    const [state, setState] = useState(0);

    const sections = document.querySelectorAll("section");

    const moveDown = (state) => {
        if (state > 0) {
            console.log('trying to scroll up');
            setState(state - 1);
        }
    }

    const moveUp = (state) => {
        if (state < 5) {
            console.log('trying to scroll down');
            setState(state + 1);
        }
    }

    useEffect(() => {
        gsap.set(sections, {visibility: "hidden"});
        gsap.set(sections[state -1], {visibility: "visible"});
    }, [state]);

    Observer.create({
        target: window,
        type: "wheel,touch,scroll,pointer",
        onUp: () => moveUp(state),
        onDown: () => moveDown(state),
        wheelSpeed: -1,
    });

    console.log(state);

    return (
        <main>
            <header>
                <div>Animated Sections</div>
                <div>
                    <a href="https://codepen.io/BrianCross/pen/PoWapLP">Original By Brian</a>
                </div>
            </header>
            <section className="first">
                <div className="outer">
                    <div className="inner">
                        <div className="bg one">
                            <h2 className="section-heading">Scroll down</h2>
                        </div>
                    </div>
                </div>
            </section>
            <section className="second">
                <div className="outer">
                    <div className="inner">
                        <div className="bg">
                            <h2 className="section-heading">Animated with GSAP</h2>
                        </div>
                    </div>
                </div>
            </section>
            <section className="third">
                <div className="outer">
                    <div className="inner">
                        <div className="bg">
                            <h2 className="section-heading">GreenSock</h2>
                        </div>
                    </div>
                </div>
            </section>
            <section className="fourth">
                <div className="outer">
                    <div className="inner">
                        <div className="bg">
                            <h2 className="section-heading">Animation platform</h2>
                        </div>
                    </div>
                </div>
            </section>
            <section className="fifth">
                <div className="outer">
                    <div className="inner">
                        <div className="bg">
                            <h2 className="section-heading">Keep scrolling</h2>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ObserverCarousel;