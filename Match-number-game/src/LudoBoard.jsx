import { useState } from "react"
import "./LudoBoard.css"

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  let number = getRandomInt(1, 10000); // random number between 1 and 10000
  console.log(number);

export default function LudoBoard(){
    let [moves, setmoves] = useState({blue:0, red:0, yellow:0, green:0});

    let updateBlue = () =>{
        setmoves((preMoves)=> {
           return {...preMoves, blue: preMoves.blue +1}
        });
    };
    let updateYellow = () =>{
        setmoves((preMoves)=> {
           return {...preMoves, blue: preMoves.blue -1}
        });
    };
    let updateGreen = () =>{
        setmoves((preMoves)=> {
           return {...preMoves, blue: preMoves.blue *2}
        });
    };
    let updateRed = () =>{
        setmoves((preMoves)=> {
           return {...preMoves, blue: preMoves.blue /2}
        });
    };

    function checkStatus(number) {
        if (number == moves.blue){
            console.log("Good");
        }
    }
  
    return(
        <div className="outer">
            <h3>Match the Number</h3>
            <h5>{number}</h5>
            <div className="board">
                <p >{moves.blue}</p>
                <div className="btn">
                    <button className="blue" onClick={updateBlue}>+1</button>
                    <button className="yellow" onClick={updateYellow}>-1</button>
                    <button className="green" onClick={updateGreen}>*2</button>
                    <button className="red" onClick={updateRed}>/2</button>
                </div>
                <h4>{number === moves.blue ? "Matched!" : "Keep Trying"}</h4>
            </div>
        </div>
    )
}