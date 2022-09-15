import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Page2 from "../Pages/Page2/Pages2";
import Page3 from "../Pages/Page3/Page3";
import Provider from "../Context/Provider";
import Page4 from '../Pages/Page4/Page4';
import Page5 from '../Pages/Page5/Page5';
import Page6 from '../Pages/Page6/Page6';
import Page7 from '../Pages/Page7/Page7'

export default function Rotas() {
  return (
    <Provider>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/rdsummit2" element={<Page2 />} />
        <Route exact path="/rdsummit3" element={<Page3 />} />
        <Route exact path="/rdsummit4" element={<Page4 />} />
        <Route exact path="/rdsummit5" element={<Page5 />} />
        <Route exact path="/rdsummit6" element={<Page6 />} />
        <Route exact path="/rdsummit7" element={<Page7 />} />

      </Routes>
    </Provider>
  );
}
