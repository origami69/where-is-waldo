import React from "react";
import { firestore } from "../firebase";
import{getDoc, doc} from "@firebase/firestore"
import { useEffect, useState} from "react";




const LeaderBoard = () => {
    let [getNames, nameAppend]= useState([])
    let [getTimes, timeAppend]= useState([])
    
    const fun= async()=>{
    const docRef = doc(firestore, "topScores", "topTimes");
    const docSnap = await getDoc(docRef);
    const timesDa=docSnap.data()
    const docName = doc(firestore, "topScores", "userNames");
    const nameSnap = await getDoc(docName);
    const nameDa= nameSnap.data()
    getNames=nameDa.user
    timeAppend(getNames)
    getTimes=timesDa.time
    nameAppend(getTimes)
    console.log(getTimes)
    console.log(getNames)
    }
useEffect(()=>{
    fun()
},[])
    return (
        <div className="container">
              <h3 className="tits">The Top 10 LeaderBoards</h3>
            <div className="container2">
            <div className="blowNut">
            {getTimes.map(object=>{
                return <div className="getTimeHold">
                    {object}
                </div>
            })}
            </div>
            <div className="holdNut">
            {getNames.map(object=>{
               return  <div className="getNameHold">
                    {object} Seconds
                </div>
            })}
            </div>
            </div>
        </div>
    );
  };
  
  export default LeaderBoard;