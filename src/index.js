import React from 'react';
import { createRoot } from "react-dom/client";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import reportWebVitals from './reportWebVitals';
import Basic from './basic/Basic';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import WeatherApp from './weatherApp/WeatherApp';
import Card from './card/Card';
import CurrentInfo from './currentInfo/CurrentInfo';
import Report from './report/Report';
import CardUI from './cardUI/CardUI';
import ApiExample from './apiExample/ApiExample';

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/basic" element={<Basic />} />
        <Route path="/weather-app" element={<WeatherApp />} />
        <Route path="/card" element={<Card />} />
        <Route path="/current-info" element={<CurrentInfo />} />
        <Route path="/report" element={<Report />} />
        <Route path="/card-ui" element={<CardUI />} />
        <Route path="/api" element={<ApiExample />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
