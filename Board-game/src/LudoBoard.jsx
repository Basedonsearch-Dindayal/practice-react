import { useState } from "react"
import "./LudoBoard.css"
export default function LudoBoard(){
    let [Moves, setMoves] = useState({blue:0, red:0, yellow:0, green:0});

    return(
        <div className="outer">
            <p>Game Begins!</p>
            <div className="board">
            <p >Blue moves = {Moves.blue}</p>
            <button className="blue">+1</button>
            <p >Yellow moves = {Moves.yellow}</p>
            <button className="yellow">+1</button>
            <p >Green moves = {Moves.green}</p>
            <button className="green">+1</button>
            <p >Red moves = {Moves.red}</p>
            <button className="red">+1</button>
            </div>
        </div>
    )
}