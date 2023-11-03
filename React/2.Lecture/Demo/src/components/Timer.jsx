import { useState } from "react";

export default function Timer(){
    const [timer, setTimer] = useState(0);
    function resetTimer(){
        setTimer(0);
    }

    setTimeout(() =>{
        setTimer(timer => timer + 1);
    }, "1000");

    return(
        <div>
            <p>{timer}</p>
            <button onClick={resetTimer}>Reset Timer</button>
        </div>
    )
}