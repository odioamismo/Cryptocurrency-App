import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import CoinInformation from "./pages/CoinInformation";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
    <Routes>
        <Route index element={<Home/>}></Route>
        <Route path="/:id" element={<CoinInformation/>}></Route>
    </Routes>
</BrowserRouter>
);

