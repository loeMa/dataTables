import { createContext, useRef, useState } from "react";



export const StoreContext = createContext()

export const StoreProvider = ({children, labels, data}) => {
    const [length, setLength] = useState(10);
    const [indexStart , setIndexStart] = useState(0);
    const [indexEnd, setIndexEnd] = useState(length);
    const [ count, setCount] = useState(data.length);
    const limitedArray = useRef(data);
    const [toggleClick, setToggleClick] = useState(false)
    const [lastSpan, setLastSpan] = useState()
    limitedArray.current =  data.slice(indexStart, indexEnd)
    
    const [dataArr, setDataArr] = useState(data)

    const store = {
        length: [length, setLength],
        indexStart: [indexStart , setIndexStart],
        indexEnd: [indexEnd, setIndexEnd],
        count: [ count, setCount],
        toggleClick: [toggleClick, setToggleClick],
        lastSpan: [lastSpan, setLastSpan],
        dataArr: [dataArr, setDataArr]
    }

    return <StoreContext.Provider value={{store}}>{children}</StoreContext.Provider>
  }


/* const handleChange = ( e) =>{
        
    setLength(Number(e.target.value))
    setIndexEnd(Number(e.target.value))
    setIndexStart(0)
    setCount(data.length)
        setDataArr(dataArr)
    }

export {handleChange}; */