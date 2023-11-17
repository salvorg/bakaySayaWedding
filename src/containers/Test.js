import React from 'react';

const Test = () => {

    return (
        <div>
            <header>
                <div>Animated Sections</div>
                <div><a href="https://codepen.io/BrianCross/pen/PoWapLP">Original By Brian</a></div>
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
        </div>
    );
};

export default Test;