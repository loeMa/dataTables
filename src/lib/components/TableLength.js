import React from 'react';
import { useContext } from 'react';
import { StoreContext } from '../utils/storeContext';
import PropTypes from 'prop-types'


/**
 * Component to select the number of entries to show
 * @param {Object[]} data - table's data
 * @param {boolean} language - to set the language
 * @returns { HTMLElement }
 */
const TableLength = ({data, language}) => {

    const {store} = useContext(StoreContext)

    //function to update index, length, count and current page
    const handleChange = ( e) =>{
        store.length[1](Number(e.target.value));
        store.indexEnd[1](Number(e.target.value));
        store.indexStart[1](0);
        store.count[1](data.length);
        store.currentPage[1](1);
        } 
    
    return (
        <div>
            
            <label htmlFor="tableLength">{language? "Show " : "Afficher " }
                <select name='tableLength' onChange={handleChange}>
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                    </select>
                    {language? " entries" : " entrées" }
            </label>
        </div>
    );
};

TableLength.propTypes = {
    data: PropTypes.array,
    language: PropTypes.bool
}

export default TableLength;