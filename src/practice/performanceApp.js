import { useMemo, useState } from "react";
import { Prime } from "./Prime";

const Optimization = () => {
    const [dark, setDark] = useState(false);
    const [number, setNumber] = useState(1)
    const prime = useMemo(()=>Prime(number),[number]);
    console.log(prime)
    return (
        <div className= {`h-96 w-96 border-2 border-green-500 m-5 bg-orange-200 ${dark && "bg-blue-400"}`}>
            <button className=" bg-green-500 p-2 m-3" onClick={()=>setDark(!dark)}>Theme</button>
            Optimization
            <input type="number" placeholder="Enter..!"
             onChange={(e) => setNumber(e.target.value)}></input>
            <h1>print prime Number : {prime}</h1>
        </div>
    )
}

export default Optimization;

