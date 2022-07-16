import './App.css'
import React from "react"
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Game from './components/Game';
import LeaderBoard from './components/LeaderBoard';
const App = () => {


  return (
      <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route path='/Game' element={<Game/>}/>
      <Route path='/leaderBoard' element={<LeaderBoard/>}/>
      </Routes>
  );
};

export default App;