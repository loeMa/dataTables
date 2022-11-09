import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './datatable.css';

const DataTable = ({labels, data}) => {

    const [length, setLength] = useState(10);
    const [indexStart , setIndexStart] = useState(0);
    const [indexEnd, setIndexEnd] = useState(length);
    const [ count, setCount] = useState(data.length);
    const [test, setTest] = useState([data])
    let limitedArray = data;


    useEffect(() =>{
        
    })

    limitedArray = limitedArray.slice(indexStart, indexEnd)

    const nextData = () =>{
        setIndexEnd(indexEnd + length);
        setIndexStart(indexStart + length);
        setCount(count - length)

    }
    const previousData= () =>{
        setIndexEnd(indexEnd - length);
        setIndexStart(indexStart - length);
        setCount(count + length);

    }

    const handleChange = (e) =>{
        limitedArray = data;
    setLength(Number(e.target.value))
    setIndexEnd(Number(e.target.value))
    setIndexStart(0)
    setCount(data.length)

    }
    

    const searchData = (e) =>{
console.log(e.target.value)
    }

    const sortData = (e) =>{
        let column = e.target.getAttribute("name")
    console.log( column)
        data.sort((a, b) => {
            console.log(column in a)
            /* let fa = a.column.toLowerCase(),
            fb = b.column.toLowerCase();
            return (fa > fb) ? 1 : (fa < fb)? -1 : 0;   */      
        }
        )

    
console.log(data)
    }

    return (
        <div>
            <div>
                <label htmlFor="tableLength">Show 
                <select name='tableLength' onChange={handleChange}>
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </select>
                entries
                </label>
            </div>
            <div>
                <label htmlFor="search"></label>
                Search: 
                <input type="search" id="search" onChange={searchData} />
            </div>
            <table style={{width: 'auto', heigth:'auto', padding: '5px 10px'}} className='table' >
                <thead >
                    <tr className='column' >
                        {labels.map((label, i) =>{
                            return <th key={i} className='column__content' >
                                        <h4>{label.text}</h4>
                                        <div className='arrow'  >
                                            <span className='arrow__top' onClick={sortData}  name={label.value} > &#9650;</span>
                                            <span className='arrow__bottom' onClick={sortData}  name={label.value} >  &#9660;</span>
                                        </div>
                                    </th>
                        })}
                    </tr>
                </thead>
                <tbody>
                    
                        {Object.values(limitedArray).map((obj, index) =>{
                            return <tr key={index}>
                                {Object.values(obj).map((value, index2) =>{
                                    return <td key={index2} >{value}</td>
                                })}
                            </tr>
                        })} 
                    
                </tbody>
            </table>
            { count < data.length && 
                <button onClick={previousData}>précedent</button> 
            }
            {count > length && 
                <button onClick={nextData}>suivant</button>
            }
            
        </div>
    );
};

export default DataTable;