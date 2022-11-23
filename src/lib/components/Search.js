import React, { useContext } from 'react';
import { StoreContext } from '../utils/storeContext';

const Search = ({labels, data}) => {
    const {store} = useContext(StoreContext)


    const searchData = (e) =>{
        
        const findData = (word) =>{

            const arrLabel= labels.map((col) =>{
                    return Object.keys(data).filter(key =>{
                        return data[key][col.value].toLowerCase().includes(word.toLowerCase())
                    }).map((foundKey) => {
                        return({...data[foundKey] })
                    }) 
                })
                return arrLabel
        } 

        const result = findData(e.target.value)
        let newArray = [];

        result.map(array =>{
            return array.filter((obj, id) =>{
                return obj.idGen = id;
            })
        }) 
        
        const jsonObject = result.flat().map(JSON.stringify)
        const uniqueSet = new Set(jsonObject)
        newArray = Array.from(uniqueSet).map(JSON.parse)
        newArray.map(obj => delete obj.idGen)
        store.dataArr[1](newArray) 
        
    }


    return (
        <div>
            <label htmlFor="search"></label>
                Search: 
            <input type="search" id="search" onChange={searchData} />
        </div>
    );
};

export default Search;