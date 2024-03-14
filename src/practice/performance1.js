import { useRef, useState } from "react";

const PerformanceApp = () => {
// const [normal, setNormal] = useState(0);
const [y,setY] = useState(0);
// const [isRef, setRef] = useState(0);

let normal = 0;
let isRef = useRef(0);
console.log("Rendering...!");
    return (
        <div className= {`h-96 w-96 border-2 border-green-500 m-5 bg-orange-200`}>
           <div className=" flex items-center">
            <button className=" bg-green-500 p-2 m-3" 
            onClick={()=>{
                normal = normal+1
                console.log(normal)
            }}>Increase X</button>
            <h1>Let : {normal}</h1>
           </div>

           <div className=" flex items-center">
            <button className=" bg-green-500 p-2 m-3" onClick={()=>setY(y+1)}>Increase Y</button>
            <h1>State : {y}</h1>
           </div >

           <div className=" flex items-center">
            <button className=" bg-green-500 p-2 m-3" onClick={()=>{
                isRef.current = isRef.current +1
                console.log("use Ref Variable",isRef.current);
            }}>Increase X</button>
            <h1>use Ref : {isRef.current}</h1>
           </div>
        </div>
    )
}

export default PerformanceApp;

