import React, { useContext } from 'react';
import { StoreContext } from '../utils/storeContext';
import PropTypes from 'prop-types';

//@ts-check
/**
 * component to search data by typing on input 
 * @param {Object[]} labels - column title of the table
 * @param {string} labels.text - the text title of the column
 * @param {string} labels.value - the value of the column
 * @param {Object[]}  data - all data for rows in the table
 * @param {Object} customSearch - style of this search session
 * @param {boolean} language - to set the language
 * @returns { HTMLElement }
 */
const Search = ({labels, data, language, customSearch}) => {
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
        store.currentPage[1](1);
        store.indexStart[1](0);
        store.indexEnd[1](store.length[0])
        store.totalPage[1](Math.ceil(newArray.length / store.length[0]))
        console.log(store.dataArr[0], store.totalPage[0], store.indexStart[0],store.indexEnd[0], store.length[0] )
    }
    

    return (
        <div style={customSearch} >
            <label htmlFor="search"></label>
            {language? "Search: " : "Chercher " } 
            <input type="search" id="search" aria-label="search" onChange={searchData} />
        </div>
    );
};

Search.propTypes = {
    labels: PropTypes.array, 
    data: PropTypes.array,
    language: PropTypes.bool,
    customSearch: PropTypes.object,
}

export default Search;