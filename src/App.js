import './styles/global.scss';
import React from "react";
import ObserverCarousel from "./components/ObserverCarousel";
import {Route, Routes} from "react-router-dom";
import GuestList from "./components/GuestList";

function App() {
  return (
    <>
        <Routes>
            <Route path="/" element={<ObserverCarousel />} />
            <Route path="/list" element={<GuestList />} />
        </Routes>

    </>
  );
}

export default App;
