import { useState } from "react";


export default function usePersistedState(key, defaultValue) {
    const [state, setState] = useState(()=>{
        const persistedState = localStorage.getItem(key);

        if(persistedState){
            return JSON.parse(persistedState);
        }

        return defaultValue;
    });

    const setPersistedState = (value) =>{
        let result;
        setState(value);

        if(typeof value === "function"){
            result = JSON.stringify(value(state));
        }else{
            result = JSON.stringify(value);
        }

        localStorage.setItem(key, value);
    }
    return[
        state,
        setPersistedState
    ];
};