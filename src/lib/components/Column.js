import React from 'react';
import SortData from './SortData';
import PropTypes from 'prop-types';


/**
 * Component of columns in the Table
 * @param {Object} label - title for each columns
 * @param {string} column - className for columns
 * @returns { HTMLElement }
 */
const Column = ({label, column, firstBackground, color}) => {
    return (
        <th  scope="col" className={`column__content ${column}` } style={{backgroundColor: firstBackground, color: color}} >
            {/* <h4>{label.text}</h4> */}
            <SortData label={label}  />
        </th>
    );
};

Column.propTypes = {
    label: PropTypes.object, 
    column: PropTypes.string,
}

export default Column;