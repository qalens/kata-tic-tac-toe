import { useEffect, useState } from "react";
import Board from "../Board";
import {XO} from '../Square'
const Game = ()=>{
    const win = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    const initValues:(XO|null)[]=[null,null,null,null,null,null,null,null,null];
    const initWinner :XO|null = null;
    const [values,setValues] = useState(initValues)
    const [turn,setTurn] = useState(XO.X);
    const [winner,setWinner] = useState(initWinner);
    const handleClick=(position:number)=>{
        let new_values=[...values];
        new_values[position] = turn;
        setValues(new_values);
        if(turn==XO.X){
            setTurn(XO.O)
        } else {
            setTurn(XO.X)
        }
       setWinner(checkWinner(new_values));
    }
    const checkWinner=(values:(XO|null)[])=>{
        let winner=null;
        win.forEach(winCombi=>{
            if(values[winCombi[0]]==values[winCombi[1]] && values[winCombi[1]]==values[winCombi[2]])
            {
                winner = values[winCombi[0]]
            }
        })
        return winner;
        
    }
    return (
        <div>
            <Board values={values} onClick={handleClick}/>
            {winner&&<div data-testid="winner-text">{winner} is Winner</div>}
        </div>
        
    )
}
export default Game;