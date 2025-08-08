import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {App} from './App';
import {Login} from './components/Login';
import {Register} from './components/Register';
import Welcome from './components/Welcome';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/welcome" element={<Welcome />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
);
