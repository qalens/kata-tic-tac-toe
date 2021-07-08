import { useState } from "react";
import Board from "../Board";
const Game = ()=>{
    const [values,setValues] = useState([null,null,null,null,null,null,null,null,null])
    return (
        <Board values={values}/>
    )
}
export default Game;