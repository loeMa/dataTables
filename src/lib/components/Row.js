import React from 'react';
import PropTypes from 'prop-types';


/**
 * 
 * @param {Object} obj - data for row
 * @returns { HTMLElement }
 */
const Row = ({obj}) => {

    function getObjKey(obj, value) {
        return Object.keys(obj).find(key => obj[key] === value);
      }

    return (
        <tr >
            {Object.values(obj).map((value, index2) =>{
            return <td key={index2} data-label={getObjKey(obj, value)} >{value}</td>
            })}
        </tr>
        
    );
};

Row.propTypes = {
    obj: PropTypes.object, 
}

export default Row;