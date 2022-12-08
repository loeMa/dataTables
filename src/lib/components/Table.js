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
 * @param {string} firstBackground - the color of the first background
 * @param {string} secondBackground - the color of the second color
 * @param {string} color - the color of the font
 * @param {string} arrowColor - the color of arrows of sorting data
 * @returns { HTMLElement }
 */
const Table = ({labels, firstBackground, secondBackground, color, arrowColor}) => {

    const {store} = useContext(StoreContext)

    return (
        <table className='table' >
            <thead >
                <tr className='column' >
                    {labels.map((label, i) =>{
                        return <Column key={i} label={label} firstBackground={firstBackground} secondBackground={secondBackground} color={color} arrowColor={arrowColor} />
                    })}
                </tr>
            </thead>
            <tbody>
                
                    {store.dataArr[0].length > 0 ?
                    Object.values( store.dataArr[0].slice(store.indexStart[0], store.indexEnd[0])).map((obj, index) =>{
                        return <Row key={index} obj={obj} index={index} secondBackground={secondBackground} />
                        
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
    firstBackground: PropTypes.string,
    secondBackground: PropTypes.string,
    color: PropTypes.string,
    arrowColor: PropTypes.string,

}

export default Table;