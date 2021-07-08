import { XO } from "../Square";
import Square from "../Square";
const Board=({values,onClick}:{values:(XO|null)[],onClick:(position:number)=>void})=>{
    return (
        <div>
            <div>
                <Square position={0} xo={values[0]} />
                <Square position={1} xo={values[1]} />
                <Square position={2} xo={values[2]} />
            </div>
            <div>
                <Square position={3} xo={values[3]} />
                <Square position={4} xo={values[4]} />
                <Square position={5} xo={values[5]} />
            </div>
            <div>
                <Square position={6} xo={values[6]} />
                <Square position={7} xo={values[7]} />
                <Square position={8} xo={values[8]} />
            </div>
        </div>
    )
}
export default Board;