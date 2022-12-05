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
 * @param {Object[]} data - all data for rows in the table
 * @returns { HTMLElement }
 */
const DataTable = ({labels, data, firstBackground, secondBackground, color, arrowColor}) => {

    const [english, setEnglish] = useState(false);
    
    const {store} = useContext(StoreContext)

    const defaultBackgroundfirst = '#5e5d5c';
    const defaultBackgroundSecond = '#e9e9ed';
    const defaultColor = 'white';
    const defaultArrowColor = '#75797a';
    const defaultArrowColorActive = 'white';
 

    return (
        <div className='dataTable__wrapper'>
            <Header labels={labels} data={data} english={english} />
            <Table labels={labels} firstBackground={firstBackground? firstBackground : defaultBackgroundfirst} color={color? color : defaultColor} />
            <Footer language={english} firstBackground={firstBackground? firstBackground : defaultBackgroundfirst} secondBackground={secondBackground? secondBackground : defaultBackgroundSecond} color={color? color : defaultColor} />
        </div>
    );
};

DataTable.propTypes = {
    labels: PropTypes.array, 
    data: PropTypes.array
}

export default DataTable;