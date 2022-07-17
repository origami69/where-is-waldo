import React from "react";
import { firestore } from "../firebase";
import{getDoc, doc, updateDoc} from "@firebase/firestore"
import find from '../assets/lnmh7c4kelr81.png'
import { useEffect, useState} from "react";
import { Link } from "react-router-dom";

const Game= () => {
    const [girlStatus, girlappend]= useState([{
        gflStat: 'no',
        osuStat:'no',
        birdStat:'no'
    }])
    const [hitStat, hitAppend]= useState({
        miss:0,
    })
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(true);
    useEffect(() => {
      let interval;
      if (running) {
        interval = setInterval(() => {
          setTime((prevTime) => prevTime + 1);
        }, 1000);
      } else if (!running) {
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }, [running]);


const handleSave= async (e)=>{
let userInput=document.querySelector('.userName').value
if(!(userInput>10)&& !(userInput<3) && userInput !==''&& !(/^[A-Za-z0-9 -]*$/.test(userInput)===true)){
    return alert('please dont leave blank and use 3-10 words/numbers')
}


const docRef = doc(firestore,'topScores','topTimes');
const docSnap = await getDoc(docRef);
const girls= docSnap.data()

const docEmilia = doc(firestore,'topScores','userNames');
const docRem = await getDoc(docEmilia);
const felt= docRem.data()
    if(girls.time.length<10){
        for(let n=0; n<girls.time.length;n++){
            if(girls.time[n]>time){
                let feltArr=felt.user
                const newFelt= feltArr.slice(0,n)
                newFelt.push(userInput)
                const feltTwo= feltArr.slice(n,(felt.user.length))
                let thirdFelt= newFelt.concat(feltTwo)
                let newArr=girls.time
                const firstArr=newArr.slice(0,n)
                firstArr.push(time)
                const secArr= newArr.slice(n,(girls.time.length))
                let third= firstArr.concat(secArr)

                const updateGirlScore= doc(firestore, "topScores", "topTimes");
                await updateDoc(updateGirlScore, {
                time: third
                });

                const updateNameStat= doc(firestore, "topScores", "userNames");
                await updateDoc(updateNameStat, {
                user: thirdFelt
                });
                 document.querySelector('.hidden').style.display='block'
                return e.target.disabled=true
            }else if(n===(girls.time.length-1)){
                    const loliRef = doc(firestore, "topScores", "topTimes");
                    let newArr=girls.time
                    newArr.push(time)
                    await updateDoc(loliRef, {
                    time: newArr
                    });
                    const userRef= doc(firestore, "topScores", "userNames");
                    let feltArr=felt.user
                    feltArr.push(userInput)
                    await updateDoc(userRef, {
                        user: feltArr
                        });
                        e.target.disabled=true
                 return document.querySelector('.hidden').style.display = 'block'
            }
        }
    }else{
            for(let n=0; n<girls.time.length;n++){
                if(girls.time[n]>time){
                    let feltArr=felt.user
                    const newFelt= feltArr.slice(0,n)
                    newFelt.push(userInput)
                    const feltTwo= feltArr.slice(n,(felt.user.length-1))
                    let thirdFelt= newFelt.concat(feltTwo)
                    let newArr=girls.time
                    const firstArr=newArr.slice(0,n)
                    firstArr.push(time)
                    const secArr= newArr.slice(n,(girls.time.length-1))
                    let third= firstArr.concat(secArr)
    
                    const updateGirlScore= doc(firestore, "topScores", "topTimes");
                    await updateDoc(updateGirlScore, {
                    time: third
                    });
    
                    const updateNameStat= doc(firestore, "topScores", "userNames");
                    await updateDoc(updateNameStat, {
                    user: thirdFelt
                    });
                    e.target.disabled=true
                    return document.querySelector('.hidden').style.display='block'
    }else if(n===(girls.time.length-1)){
        e.target.disabled=true
        return document.querySelector('.hidden').style.display='block'
    }
}
}
}
    const clickHandler= async(e)=>{
        const x = e.pageX - e.target.offsetLeft;
        const y = e.pageY - e.target.offsetTop;
        const docRef = doc(firestore,'getPos','gfl');
        const docSnap = await getDoc(docRef);
        const girls= docSnap.data()
        const docOsu = doc(firestore,'getPos','osu');
        const snapOsu = await getDoc(docOsu);
        const getOsu= snapOsu.data()
        const docBird = doc(firestore,'getPos','bird');
        const snapBird = await getDoc(docBird);
        const birds= snapBird.data()
        if((girls.pos1[0]<x && x<girls.pos2[0]) && (girls.pos1[1]<y && y<girls.pos2[1]) && girlStatus[0].gflStat==='no'){
           let copy=[...girlStatus]
           copy[0].gflStat='yes'
           girlappend(copy)
           document.querySelector('.notif').style.display='flex'
           document.querySelector('.youHit').style.display='flex'
        }else if((getOsu.pos1[0]<x && x<getOsu.pos2[0]) && (getOsu.pos1[1]<y && y<getOsu.pos2[1]) && girlStatus[0].osuStat==='no'){
            let copy=[...girlStatus]
            copy[0].osuStat='yes'
            girlappend(copy)
            document.querySelector('.notif').style.display='flex'
            document.querySelector('.youHit').style.display='flex'
        }else if((birds.pos1[0]<x && x<birds.pos2[0]) && (birds.pos1[1]<y && y<birds.pos2[1]) && girlStatus[0].birdStat==='no'){
            let copy=[...girlStatus]
            copy[0].birdStat='yes'
            girlappend(copy)
            document.querySelector('.notif').style.display='flex'
            document.querySelector('.youHit').style.display='flex'
        }else{
            const update = {miss:0}
            update.miss=hitStat.miss+1
            hitAppend(update)
            document.querySelector('.notif').style.display='flex'
            document.querySelector('.notifHold').style.display='flex'
        }
        if(girlStatus[0].gflStat==='yes' && girlStatus[0].osuStat==='yes' && girlStatus[0].birdStat==='yes'){
            setRunning(false)
            document.querySelector('.popUpBack').style.display='flex'
        }


    }
const remover=(e)=>{
    e.target.parentElement.style.display='none'
    document.querySelector('.notif').style.display='none'
}
        return (
          <div className="container">
            <img className="dude" src={find}   onClick={clickHandler} alt=''/>
            <p className="times">{time}</p>
            <div className="notif">
                <div className="notifHold">
                <p className="notifWord">You Missed BAKA!!!</p>
                    <button className="exit" onClick={remover}>X</button>
                </div>
                <div className="youHit">
                    <p className="notifWord">You Found One of the Targets Onii-Chan!!!</p>
                    <button className="exit" onClick={remover}>X</button>
                </div>
            </div>
            <div className="popUpBack">
                <div className="popUp">
                    <p>Time: {time}</p>
                    <p>Misses: {hitStat.miss}</p>
                        <label htmlFor='name'>Enter Name</label>
                        <input className="userName" type='text' name="name" />
                       <button  className="exit" onClick={handleSave}>Submit</button>
                       <Link to='/leaderBoard' className="hidden">Proceed</Link>
                </div>
            </div>
          </div>
        );
      };
      
      export default Game;
      