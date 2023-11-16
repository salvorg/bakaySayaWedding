import React, {useEffect, useRef} from 'react';
import Player from '../components/Player';
import InviteForm from '../components/InviteForm';
import MapComponent from '../components/MapComponent';
import DateTimer from '../components/DateTimer';
import {gsap} from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger";


const MainPage = () => {
    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null);

    // useEffect(() => {
    //     const element = ref.current;
    //     const elements = element.querySelectorAll('.main-page-box');
    //
    //     elements.forEach((el) => {
    //
    //         gsap.fromTo(
    //             el, {opacity: 1}, {
    //                 opacity: 0,
    //                 scrollTrigger: {
    //                     trigger: el,
    //                     start: 'center',
    //                     end: '920',
    //                     scrub: true,
    //                 }
    //             }
    //         );
    //     });
    // }, []);


    useEffect(() => {
        const headerRef = ref.current;

        gsap.fromTo(headerRef.querySelector(".head2"),
            {opacity: 0, scale: 0.8},
            {
                opacity: 1,
                scale: 1,
                scrollTrigger: {
                    trigger: headerRef.querySelector(".head2"),
                    scrub: true
                },
                duration: 2
            });

        gsap.fromTo(headerRef.querySelector(".head3"),
            {opacity: 0, x: -500, scale: 0},
            {
                opacity: 1, x: 0, scale: 2,
                scrollTrigger: {
                    trigger: headerRef.querySelector(".head3"),
                    scrub: true
                },
                duration: 15,
            })
    }, []);


    return (
        <div ref={ref} className="wrapper">
            <main className="main-page-block">

                <Player/>

                <div data-speed="0.5" className="main-page-box main-page-box-1">
                    <h2 className="main-page-header">Свадьба <br/> Бакая и Жансаи</h2>
                </div>

                <div className="main-page-box main-page-box-2">
                    <h2 className="main-page-header head2">Женимся по любви</h2>
                    <InviteForm/>
                </div>

                <div data-speed="0.5" className="main-page-box main-page-box-3">
                    <h2 data-speed="2" className="main-page-header head3">Royal Hall</h2>
                    <p>Адрес: с.Кок-Жар, ул. Мадиева 18</p>
                    <MapComponent/>
                </div>

                <div className="main-page-box main-page-box-4">
                    <h2 className="main-page-header head4">Осталось до начала:</h2>
                    <DateTimer/>
                </div>

            </main>
        </div>
    );
};

export default MainPage;