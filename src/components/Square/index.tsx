export enum XO{
    X='X',
    O='O'
}
const Square=({position,xo,onClick}:{position:number,xo:XO|null,onClick:(position:number)=>void})=>{
    return <button data-testid={"square-"+position} onClick={()=>{onClick(position)}} style={
        {
            width:'100px',
            height:'100px'
        }
    }>
        {xo==null?"":xo}
    </button>
}
export default Square;