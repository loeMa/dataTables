import React from 'react';
import { useContext } from 'react';
import { StoreContext } from '../utils/storeContext';

const TableLength = ({data}) => {

    const {store} = useContext(StoreContext)

    const handleChange = ( e) =>{
        
        store.length[1](Number(e.target.value))
        store.indexEnd[1](Number(e.target.value))
        store.indexStart[1](0)
        store.count[1](data.length)
        //store.dataArr[1](store.dataArr)
        } 
    
    return (
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
    );
};

export default TableLength;