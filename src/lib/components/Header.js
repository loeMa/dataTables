import React from 'react';
import Search from './Search';
import TableLength from './TableLength';
import PropTypes from 'prop-types';


/**
 * Header of the Table
 * @param {Object[]} labels - column title of the table
 * @param {string} labels.text - the text title of the column
 * @param {string} labels.value - the value of the column
 * @param {Object[]}  data - all data for rows in the table
 * @param {boolean} language - to set the language 
 * @param {Object} customHeader - style of the Header
 * @returns { HTMLElement }
 */
const Header = ({labels, data, language, customHeader}) => {

    return (
        <div className={`dataTable__header`} style={customHeader}>
            <TableLength data={data} language={language} />
            <Search labels={labels} data={data} language={language} />
        </div>
    );
};

Header.propTypes = {
    labels: PropTypes.array, 
    data: PropTypes.array,
    language: PropTypes.bool,
    customHeader: PropTypes.object,
}

export default Header;