import './styles/global.scss';
import React from "react";
import ObserverCarousel from "./containers/ObserverCarousel";
import {Route, Routes} from "react-router-dom";
import GuestList from "./containers/GuestList";
import InvitationLetter from "./containers/InvitationLetter";
import MainPage from "./containers/MainPage";
import Test from "./containers/Test";

function App() {
  return (
    <>
        <Routes>
            <Route path="/letter" element={<InvitationLetter />} />
            <Route path="/" element={<ObserverCarousel />} />
            <Route path="/main" element={<MainPage />} />
            <Route path="/list" element={<GuestList />} />
            <Route path="/test" element={<Test />} />
        </Routes>
    </>
  );
}

export default App;
