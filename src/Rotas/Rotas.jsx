import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Page2 from "../Pages/Page2/Pages2";
import Page3 from "../Pages/Page3/Page3";
import Provider from "../Context/Provider";
import Page4 from '../Pages/Page4/Page4';

export default function Rotas() {
  return (
    <Provider>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/rdsummit2" element={<Page2 />} />
        <Route exact path="/rdsummit3" element={<Page3 />} />
        <Route exact path="/rdsummit4" element={<Page4 />} />
      </Routes>
    </Provider>
  );
}
