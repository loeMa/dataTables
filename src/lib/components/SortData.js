import React, { useContext } from 'react';
import { StoreContext } from '../utils/storeContext';
import PropTypes from 'prop-types'


/**
 * component to sort datas by click on columns
 * @param {Object[]} label - value of the table'scolumn selected
 * @returns { HTMLElement }
 */
const SortData = ({label}) => {

    const {store} = useContext(StoreContext)

    /**
     * Function to sort data 
     * @param {string} column - name of the column
     * @returns {Object[]} update of the data's list
     */
    const sortData = column => (e) =>{
console.log(e.currentTarget)
        let arrowBottom = document.querySelector(`.arrow__bottom.${store.lastSpan[0]}` )
        let arrowTop = document.querySelector(`.arrow__top.${store.lastSpan[0]}` )
    
        //setLastSpan(column) for the store
        store.lastSpan[1](column)
    
        //change style for arrows
        arrowTop != null && 
            arrowTop.classList.remove('arrow--active') 
            arrowBottom != null &&
            arrowBottom.classList.remove('arrow--active')
            
            
            const sort = () =>{
                return Object.keys(store.dataArr[0]).sort((a, b) => {
                    const dataColumn = new Date(store.dataArr[0][a][column])
                    if(store.toggleClick[0] === false){

                        // if dataColumn is a Date so sort data
                        if(dataColumn > 0){
                            e.currentTarget.childNodes[1].firstChild.classList.add('arrow--active');
                            store.toggleClick[1](true)
                            return  new Date(store.dataArr[0][a][column]) - new Date(store.dataArr[0][b][column]);
                        
                        }else{
                            let fa = store.dataArr[0][a][column].toLowerCase(),
                            fb = store.dataArr[0][b][column].toLowerCase();
                            store.toggleClick[1](true)
                            e.currentTarget.childNodes[1].firstChild.classList.add('arrow--active');

                        return (fa > fb) ? 1 : (fa < fb)? -1 : 0 ; 

                        }
                    }else{
                        // if dataColumn is a Date so sort data
                        if(dataColumn > 0){
                            e.currentTarget.childNodes[1].lastChild.classList.add('arrow--active');
                            store.toggleClick[1](false)
                            return  new Date(store.dataArr[0][b][column]) - new Date(store.dataArr[0][a][column]);

                        }else{
                            let fa = store.dataArr[0][a][column].toLowerCase(),
                            fb = store.dataArr[0][b][column].toLowerCase();
                            
                            e.currentTarget.childNodes[1].lastChild.classList.add('arrow--active');
                            store.toggleClick[1](false)

                        return (fa < fb) ? 1 : (fa > fb)? -1 : 0 ; 
                        
                        }
                    }
                
            }
            ).map(found => ({...store.dataArr[0][found]})) 
        }
            
            const result = sort()
            store.dataArr[1](result)
            store.indexStart[1](0)
            store.indexEnd[1](store.length[0])
            store.count[1](store.dataArr[0].length)
        }


    return (
        <div className='arrow' onClick={sortData(label.value)} >
            <h4>{label.text}</h4>
            <div className='arrow__wrap'>
                <span className={'arrow__top '+label.value}  > &#9650;</span>
                <span className={'arrow__bottom ' +label.value}  >  &#9660;</span>
            </div>
            
        </div>
    );
};

SortData.propTypes = {
    label: PropTypes.object, 
}

export default SortData;