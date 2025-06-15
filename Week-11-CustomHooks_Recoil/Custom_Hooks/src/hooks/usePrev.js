import { useEffect, useRef } from "react";

export function usePrev(value){
    const ref = useRef();
        
    useEffect(() => {
        ref.current = value;
    }, [value]);
    
    if(!value){
        return "NULL";
    }
    return ref.current;
}