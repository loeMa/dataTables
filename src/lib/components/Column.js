import React from 'react';
import SortData from './SortData';
import PropTypes from 'prop-types';


/**
 * 
 * @param {Object} label - title for each columns
 * @returns { HTMLElement }
 */
const Column = ({label}) => {
    return (
        <th  scope="col" className='column__content' >
            {/* <h4>{label.text}</h4> */}
            <SortData label={label} />
        </th>
    );
};

Column.propTypes = {
    label: PropTypes.object, 
}

export default Column;