import { useState } from "react";

const useFormHandler =(initialState)=>{
    const [data, setData] = useState(initialState);
    const dataHandler =(prop, value)=> {
        setData(data=>({
            ...data,
            [prop]: value,
        }))
    }
    

    // reset data 

    const reset = ()=> setData(initialState)

    return [data,dataHandler, reset]

}

export default useFormHandler;


