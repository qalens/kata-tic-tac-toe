import { useEffect, useState } from "react";
import Board from "../Board";
import {XO} from '../Square'
const Game = ()=>{
    const initValues:(XO|null)[]=[null,null,null,null,null,null,null,null,null];
    const [values,setValues] = useState(initValues)
    
    const handleClick=(position:number)=>{
        let new_values=[...values];
        new_values[position] = XO.X;
        setValues(new_values);
    }
    return (
        <Board values={values} onClick={handleClick}/>
    )
}
export default Game;