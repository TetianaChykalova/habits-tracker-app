import React from 'react';
import './App.scss';
import {HashRouter, Routes, Route, Navigate} from 'react-router-dom'
import Welcome from "./compomemts/Welcome/Welcome";
import MyHabits from "./compomemts/MyHabits/MyHabits";
import Header from "./compomemts/Header/Header";

function App() {

    return (
        <HashRouter>
            <Header/>

            <Routes>
                <Route path='/welcome' element={<Welcome/>}/>
                <Route path='/habits' element={<MyHabits/>}/>
                <Route path="/" element={<Navigate to="/welcome" replace/>}/>
            </Routes>

        </HashRouter>
    );
}

export default App;
