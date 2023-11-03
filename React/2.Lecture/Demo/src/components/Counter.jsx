import { useState } from 'react'

export default function Counter(){
    const [counter, setCounter] = useState(0);
    function counterIncrementHandler(){
        setCounter(counter + 1);
    }
    function counterDecrementHandler(){
        setCounter(counter - 1);
    }
    function counterResetHandler(){
        setCounter(0);
    }
    return(
        <div>
            {counter < 0 ? <p>Number is negative</p> : null}
            {counter > 0 ? <p>Number is positive</p> : null}
            <p>{counter}</p>
            <button onClick={counterDecrementHandler}>-</button>
            <button onClick={counterResetHandler}>Reset</button>
            <button onClick={counterIncrementHandler}>+</button>
        </div>
    )
}