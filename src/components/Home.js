import React from "react";
import { Link } from "react-router-dom";
import bird from '../assets/151-1515288_flappy-bird-png-jpg-download-flappy-bird-bird.jpeg'
import osu from '../assets/Osu_Logo_2016.svg.png'
import gfl from '../assets/unnamed.png'
const Home= () => {
const clicker=()=>{
  alert('The Game Is no longer avalible on google store. But can find third party versions online')
}    
return (
      <div className="container">
        <h3 className="title">Find Waldo Remake</h3>
        <div className="holdFind">
        <div className="find">
          <p>Find The GFL Logo</p>
          <a href="https://gf.sunborngame.com/"> 
          <img src={gfl} alt='' className="gfl"/>
          </a>
        </div>
        <div className="find">
        <p>Find The Osu Logo</p>
        <a href="https://osu.ppy.sh/home">
          <img src={osu} alt='' className="osu"/>
          </a>
        </div>
        <div className="find">
        <p>Find The Flappy Bird Logo</p>
          <img src={bird} alt='' className="bird" onClick={clicker}/>
        </div>
        </div>
        <Link to={'/Game'}><button className="next">Start Game</button></Link>
      </div>
    );
  };
  
  export default Home;
  