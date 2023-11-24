import { useState } from "react"


export default function usePersistedState(key, defaultValue){
    const [state, setState] = useState(() =>{
        const pesistedState = localStorage.getItem(key);

        if(pesistedState){
            return JSON.parse(pesistedState);
        }

        return defaultValue;
    });

    const setPersistedState = (value) => {
        let resultValue;
        setState(value);

        if(typeof value === "function"){
            resultValue = JSON.stringify(value(state));
        }else{
            resultValue = JSON.stringify(value);
        }
        
        localStorage.setItem(key, resultValue);
    }
    return[
        state,
        setPersistedState
    ]
}
