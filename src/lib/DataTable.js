import React, { useContext} from 'react';
import './datatable.css';
import { StoreContext } from './utils/storeContext';
import PropTypes from 'prop-types'
import { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Table from './components/Table';


/**
 * table's labels and data 
 * @param {Object[]} labels - column title of the table
 * @param {string} labels.text - the text title of the column
 * @param {string} labels.value - the value of the column
 * @param {boolean} language -to set in french(false) or english(true)
 * @param {Object[]} data - all data for rows in the table
 * @param {string} firstBackground - the color of the first background
 * @param {string} secondBackground - the color of the second color
 * @param {string} color - the color of the font
 * @param {string} arrowColor - the color of arrows of sorting data
 * @returns { HTMLElement }
 */
const DataTable = ({labels, language, data, firstBackground, secondBackground, color, arrowColor}) => {

    const {store} = useContext(StoreContext)

    const defaultBackgroundfirst = '#5e5d5c';
    const defaultBackgroundSecond = '#e9e9ed';
    const defaultColor = 'white';
    const defaultArrowColor = '#75797a';
    

    return (
        <div className='dataTable__wrapper'>
            <Header labels={labels} data={data} language={language? language : false} />
            <Table labels={labels} 
            firstBackground={firstBackground? firstBackground : defaultBackgroundfirst} 
            color={color? color : defaultColor} 
            secondBackground={secondBackground? secondBackground : defaultBackgroundSecond}
            arrowColor={arrowColor? arrowColor : defaultArrowColor} 
            />
            <Footer language={language? language : false} firstBackground={firstBackground? firstBackground : defaultBackgroundfirst} secondBackground={secondBackground? secondBackground : defaultBackgroundSecond} color={color? color : defaultColor} />
        </div>
    );
};

DataTable.propTypes = {
    labels: PropTypes.array, 
    data: PropTypes.array,
    language: PropTypes.bool,
    firstBackground: PropTypes.string,
    secondBackground: PropTypes.string,
    color: PropTypes.string,
    arrowColor: PropTypes.string,
}

export default DataTable;