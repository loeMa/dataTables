import React, { useContext } from 'react';
import { StoreContext } from '../utils/storeContext';
import PropTypes from 'prop-types';

/**
 * Component for the table's pagination 
 * @param {boolean} language - to set the language 
 * @param {Object} customPagination - style for the pagination 
 * @param {string} firstBackground - the color of the first background
 * @param {string} secondBackground - the color of the second color
 * @param {string} color - the color of the font
 * @returns { HTMLElement }
 */
const Pagination = ({language, customPagination, firstBackground, secondBackground, color}) => {

    const {store} = useContext(StoreContext)
    const page = store.totalPage[0];
    let countIterate = 1
    let numberArray = [];
    let resultArray = [];
    const current = Number(store.currentPage[0]) - 1;
    const nextSibling = current + 1 ;
    const previousSibling = current -1;


        //create array with integer until page number
        for(let i = 0 ; i < page; i++){
            numberArray.push(countIterate);
            countIterate ++;
        }

    const start = numberArray[0];
    const last = numberArray.length;

        const changePage = (e) =>{
            store.indexEnd[1](store.length[0] * e.target.value);
            store.indexStart[1]((store.length[0] * e.target.value) - store.length[0])
            store.currentPage[1](e.target.value)
        }

        
        
        //create a new array to show only few number's page -> shorter the pagination
        if(numberArray.length >= 5){

            if(start === numberArray[current]){
                resultArray.push(start, numberArray[1], numberArray[2], "...", last)
            }
            else if(numberArray[page - 1] === numberArray[current ]){
                resultArray.push(start, numberArray[1], "...",numberArray[page - 3],numberArray[page - 2], last)
            }
            else if(numberArray[previousSibling] === start ){
                resultArray.push(numberArray[previousSibling], numberArray[current], numberArray[nextSibling],"...", last)
            } 
            else if(numberArray[previousSibling - 1] === start){
                resultArray.push(start, numberArray[previousSibling], numberArray[current], numberArray[nextSibling],"...", last)
            }
            else if(numberArray[nextSibling] === last){
                resultArray.push(start,'...', numberArray[previousSibling], numberArray[current], numberArray[nextSibling])
            } 
            else if(numberArray[nextSibling + 1] === last){
                resultArray.push(start,'...', numberArray[previousSibling], numberArray[current], numberArray[nextSibling], last)
            }
            else if(numberArray[current] <= last - 3 || numberArray[current] >= start + 3){
                resultArray.push(start,'...', numberArray[previousSibling], numberArray[current], numberArray[nextSibling],"...", last)
            }
            else{
                resultArray = numberArray;
            } 
        }
        
        
    return (
        <div className={`pagination`} style={customPagination}>
            <div>
        
        { 
            resultArray.map((input, index) =>{
                    
                if(input === "..."){
                    return <span key={index}>...</span>
                }else if(input === current +1){
                    return <button key={index} style={{backgroundColor: firstBackground, border: 'none', color: color }} value={input} onClick={changePage} >{input}</button>
                }
                else{
                    return <button key={index} style={{backgroundColor: secondBackground ,border: 'none', }} value={input} onClick={changePage} >{input}</button>
                }
                
            })
            
        }
        </div>
        <div className='pagination__direct'>
        <label htmlFor='pageNumber'>{language? "Go directly to page :" : "Aller directement à la page:"}  </label>
        <select id='pageNumber' name='pageNumber' onChange={changePage}>
        {
            numberArray.map((input, i) =>{
                
                return <option key={i}  value={input}>{input}</option>
            })
        }
        </select>
        </div>
        </div>
    );
};

Pagination.propTypes = {
    language: PropTypes.bool,
    firstBackground: PropTypes.string,
    color: PropTypes.string,
    secondBackground: PropTypes.string,
    customPagination: PropTypes.object
}

export default Pagination;