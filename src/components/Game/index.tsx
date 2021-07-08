import { useEffect, useState } from "react";
import Board from "../Board";
import {XO} from '../Square'
const Game = ()=>{
    const initValues:(XO|null)[]=[null,null,null,null,null,null,null,null,null];
    const [values,setValues] = useState(initValues)
    const [turn,setTurn] = useState(XO.X);
    const handleClick=(position:number)=>{
        let new_values=[...values];
        new_values[position] = turn;
        setValues(new_values);
        if(turn==XO.X){
            setTurn(XO.O)
        } else {
            setTurn(XO.X)
        }
    }
    return (
        <Board values={values} onClick={handleClick}/>
    )
}
export default Game;