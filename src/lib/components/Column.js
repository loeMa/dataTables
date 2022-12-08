import React from 'react';
import SortData from './SortData';
import PropTypes from 'prop-types';


/**
 * Component of columns in the Table
 * @param {Object} label - title for each columns
 * @param {string} column - className for columns
 * @param {string} firstBackground - the color of the first background
 * @param {string} color - the color of the font
 * @param {string} arrowColor - the color of arrows of sorting data
 * @returns { HTMLElement }
 */
const Column = ({label, column, firstBackground, color, arrowColor}) => {
    return (
        <th  scope="col" className={`column__content ${column}` } style={{backgroundColor: firstBackground, color: color}} >
            {/* <h4>{label.text}</h4> */}
            <SortData label={label} color={color} arrowColor={arrowColor} />
        </th>
    );
};

Column.propTypes = {
    label: PropTypes.object, 
    column: PropTypes.string,
    firstBackground: PropTypes.string,
    color: PropTypes.string,
    arrowColor: PropTypes.string,
}

export default Column;