import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import SignInSide from "./pages/login";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Panel from "./pages/Panel/Panel";
import Norris from "./pages/Panel/components/chuck/Norris";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<SignInSide/>}/>
            <Route path="/panel" element={<Panel/>}/>
            <Route path="/panel/norris" element={<Norris/>}/>
        </Routes>
    </BrowserRouter>
);

reportWebVitals();
