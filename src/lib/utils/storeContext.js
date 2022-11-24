import { createContext, useState } from "react";



export const StoreContext = createContext()

/**
 * Provider to useContext
 * @param {*} children 
 * @param {Object[]} data - all data for the table
 * @returns {Object[]} to use in all components
 */
export const StoreProvider = ({children, data}) => {
    const [length, setLength] = useState(10);
    const [indexStart , setIndexStart] = useState(0);
    const [indexEnd, setIndexEnd] = useState(length);
    const [count, setCount] = useState(data.length);
    const [toggleClick, setToggleClick] = useState(false);
    const [lastSpan, setLastSpan] = useState();
    const [dataArr, setDataArr] = useState(data);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(Math.ceil(dataArr.length / length));

    const store = {
        length: [length, setLength],
        indexStart: [indexStart , setIndexStart],
        indexEnd: [indexEnd, setIndexEnd],
        count: [ count, setCount],
        toggleClick: [toggleClick, setToggleClick],
        lastSpan: [lastSpan, setLastSpan],
        dataArr: [dataArr, setDataArr],
        currentPage: [currentPage, setCurrentPage],
        totalPage: [totalPage, setTotalPage]
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