export enum XO{
    X='X',
    O='O'
}
const Square=({position,xo}:{position:number,xo:XO|null})=>{
    return <button data-testid="square">
    </button>
}
export default Square;