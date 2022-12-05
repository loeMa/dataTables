import React, { useContext } from 'react';
import { StoreContext } from '../utils/storeContext';
import Column from './Column';
import Row from './Row';
import PropTypes from 'prop-types';


/**
 * 
 * @param {Object[]} labels - column title of the table
 * @param {string} labels.text - the text title of the column
 * @param {string} labels.value - the value of the column
 * @returns { HTMLElement }
 */
const Table = ({labels, firstBackground, color}) => {

    const {store} = useContext(StoreContext)

    return (
        <table /* style={{width: 'auto', heigth:'auto', padding: '5px 10px'}} */ className='table' >
            <thead >
                <tr className='column' >
                    {labels.map((label, i) =>{
                        return <Column key={i} label={label} firstBackground={firstBackground} color={color} />
                    })}
                </tr>
            </thead>
            <tbody>
                
                    {store.dataArr[0].length > 0 ?
                    Object.values( store.dataArr[0].slice(store.indexStart[0], store.indexEnd[0])).map((obj, index) =>{
                        return <Row key={index} obj={obj} />
                        
                    }) :
                    <tr>
                        <td>Aucune donnée de disponible </td>
                    </tr>
                    }   
                
            </tbody>
        </table>
    );
};

Table.propTypes = {
    labels: PropTypes.array, 
}

export default Table;