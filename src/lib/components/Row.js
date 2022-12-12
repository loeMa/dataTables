import React from 'react';
import PropTypes from 'prop-types';


/**
 * Rows in the Table
 * @param {Object} obj - data for row
 * @param {string} secondBackground - the color of the second color
 * @param {number} index - index of each row
 * @param {Object} customRow - style for the row 
 * @returns { HTMLElement }
 */
const Row = ({index, secondBackground, obj, customRow}) => {

    const style = {
        backgroundColor : index%2 === 0 ? "" :  secondBackground,
        filter: ' brightness(105%)'
    }

    function getObjKey(obj, value) {
        return Object.keys(obj).find(key => obj[key] === value);
    }
    
    return (
        <tr  style={{...style,...customRow}}  >
            {Object.values(obj).map((value, index2) =>{
            return <td key={index2} data-label={getObjKey(obj, value)}  >{value}</td>
            })}
        </tr>
        
    );
};

Row.propTypes = {
    obj: PropTypes.object, 
    secondBackground: PropTypes.string,
    index: PropTypes.number,
    customRow: PropTypes.object,
}

export default Row;