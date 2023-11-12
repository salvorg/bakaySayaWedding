import React, {useEffect, useState} from "react";
import {gsap} from "gsap";
import {Observer} from "gsap/Observer";

gsap.registerPlugin(Observer);

const ObserverCarousel = () => {
    const [state, setState] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const headers = ["Scroll down", "Animated with GSAP", "GreenSock", "Animation platform", "Keep scrolling"]
    const sections = document.querySelectorAll("section");
    const images = document.querySelectorAll(".bg");

    const moveDown = (state) => {
        if (state > 0) {
            setState(state - 1);
        }
    }

    const moveUp = (state) => {
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
                .call(() => setIsAnimating(false));

            gsap.set(sections, {visibility: "hidden"});
            gsap.set(sections[state], {visibility: "visible"});
        }
    }, [state]);

    Observer.create({
        target: window,
        type: "wheel,touch,scroll,pointer",
        onUp: () => moveUp(state),
        onDown: () => moveDown(state),
        wheelSpeed: -1,
    });

    return (
        <main>
            <header>
                <div>Animated Sections</div>
                <div>
                    <a href="https://codepen.io/BrianCross/pen/PoWapLP">Original By Brian</a>
                </div>
            </header>
            {Array.from({length: 5}, (_, index) => (
                <section
                    key={index}
                    className={`section section-${index + 1}`}
                >
                    <div className="outer">
                        <div className="inner">
                            <div className="bg">
                                <h2 className="section-heading">{headers[index]}</h2>
                            </div>
                        </div>
                    </div>
                </section>
            ))}
            {/*<section className="section section-1">*/}
            {/*    <div className="outer">*/}
            {/*        <div className="inner">*/}
            {/*            <div className="bg one">*/}
            {/*                <h2 className="section-heading">Scroll down</h2>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}
            {/*<section className="section section-2">*/}
            {/*    <div className="outer">*/}
            {/*        <div className="inner">*/}
            {/*            <div className="bg">*/}
            {/*                <h2 className="section-heading"></h2>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}
            {/*<section className="section section-3">*/}
            {/*    <div className="outer">*/}
            {/*        <div className="inner">*/}
            {/*            <div className="bg">*/}
            {/*                <h2 className="section-heading">GreenSock</h2>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}
            {/*<section className="section section-4">*/}
            {/*    <div className="outer">*/}
            {/*        <div className="inner">*/}
            {/*            <div className="bg">*/}
            {/*                <h2 className="section-heading">Animation platform</h2>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}
            {/*<section className="section section-5">*/}
            {/*    <div className="outer">*/}
            {/*        <div className="inner">*/}
            {/*            <div className="bg">*/}
            {/*                <h2 className="section-heading">Keep scrolling</h2>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}
        </main>
    );
};

export default ObserverCarousel;