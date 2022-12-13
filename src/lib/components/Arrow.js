import React, { useContext } from 'react';
import { StoreContext } from '../utils/storeContext';
import PropTypes from 'prop-types'


/**
 * Component to show next or previous list of data
 * @param {Object} customButton - style for the button
 * @param {string} classname - calassName of previous and next button
 * @param {string} onclick - name of the onclick's function
 * @param {string} title - title of the button
 * @returns { HTMLElement }
 */
const Arrow = ({customButton,classname, onclick, title}) => {

    const {store} = useContext(StoreContext);

    //update index, count and current page when click on next button
    const nextData = () =>{
        store.indexEnd[1](store.indexEnd[0] + store.length[0]);
        store.indexStart[1](store.indexStart[0] + store.length[0]);
        store.count[1](store.count[0] - store.length[0]);
        store.currentPage[1](store.currentPage[0] + 1)

    }
    //update index, count and current page when click on previous button
    const previousData= () =>{
        store.indexEnd[1](store.indexEnd[0] - store.length[0]);
        store.indexStart[1](store.indexStart[0] - store.length[0]);
        store.count[1](store.count[0] + store.length[0]);
        store.currentPage[1](store.currentPage[0] - 1)

    }

    return (
        <div style={customButton}>
            {onclick === nextData.name?
            <button className={classname} onClick={nextData}>{title}</button> 
            :
            <button className={classname} onClick={previousData}>{title}</button> 
            }  
        </div>
        
        
    );
};

Arrow.propTypes = {
    customButton: PropTypes.object, 
    onclick: PropTypes.string,
    title: PropTypes.string,
    classname: PropTypes.string
}

export default Arrow;