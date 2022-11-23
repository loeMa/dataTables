import React, { useContext } from 'react';
import { StoreContext } from '../utils/storeContext';
import PropTypes from 'prop-types'

//@ts-check
/**
 * component to search data by typing on input 
 * @param {Object[]} labels - column title of the table
 * @param {string} labels.text - the text title of the column
 * @param {string} labels.value - the value of the column
 * @param {Object[]}  data - all data for rows in the table
 * @returns { HTMLElement }
 */
const Search = ({labels, data}) => {
    const {store} = useContext(StoreContext)


    const searchData = (e) =>{
        
        /**
         * 
         * @param {string|Date} word - onchange in the input search
         * @returns {Object[]} new array for all datas
         */
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
        
        //make one array and delete all doubles
        const jsonObject = result.flat().map(JSON.stringify)
        const uniqueSet = new Set(jsonObject)
        newArray = Array.from(uniqueSet).map(JSON.parse)
        
        store.dataArr[1](newArray) 
        store.count[1](newArray.length)
        
    }


    return (
        <div>
            <label htmlFor="search"></label>
                Search: 
            <input type="search" id="search" onChange={searchData} />
        </div>
    );
};

Search.propTypes = {
    labels: PropTypes.array, 
    data: PropTypes.array
}

export default Search;