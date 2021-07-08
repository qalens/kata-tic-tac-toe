import { XO } from "../Square";
import Square from "../Square";
const Board=({values,onClick}:{values:(XO|null)[],onClick:(position:number)=>void})=>{
    return (
        <div>
            <div>
                <Square position={0} xo={values[0]} onClick={onClick}/>
                <Square position={1} xo={values[1]} onClick={onClick}/>
                <Square position={2} xo={values[2]} onClick={onClick}/>
            </div>
            <div>
                <Square position={3} xo={values[3]} onClick={onClick}/>
                <Square position={4} xo={values[4]} onClick={onClick}/>
                <Square position={5} xo={values[5]} onClick={onClick}/>
            </div>
            <div>
                <Square position={6} xo={values[6]} onClick={onClick}/>
                <Square position={7} xo={values[7]} onClick={onClick}/>
                <Square position={8} xo={values[8]} onClick={onClick}/>
            </div>
        </div>
    )
}
export default Board;