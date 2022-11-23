import React, { useContext } from 'react';
import { StoreContext } from '../utils/storeContext';
import PropTypes from 'prop-types'


/**
 * Component to show next or previous list of data
 * @param {string} classname - className for the button
 * @param {string} onclick - name of the onclick's function
 * @param {string} title - title of the button
 * @returns { HTMLElement }
 */
const Arrow = ({classname, onclick, title}) => {

    const {store} = useContext(StoreContext);

    //update 
    const nextData = () =>{
        store.indexEnd[1](store.indexEnd[0] + store.length[0]);
        store.indexStart[1](store.indexStart[0] + store.length[0]);
        store.count[1](store.count[0] - store.length[0])
        //store.dataArr[1](store.dataArr[0])
        console.log(store.count[0], store.length[0])
    }
    const previousData= () =>{
        store.indexEnd[1](store.indexEnd[0] - store.length[0]);
        store.indexStart[1](store.indexStart[0] - store.length[0]);
        store.count[1](store.count[0] + store.length[0]);
        //store.dataArr[1](store.dataArr[0])
        console.log(store.count[0])
    }

    return (
        <div>
            {onclick === nextData.name?
            <button className={classname} onClick={nextData}>{title}</button> 
             :
            <button className={classname} onClick={previousData}>{title}</button> 
            }  
        </div>
        
        
    );
};

Arrow.propTypes = {
    classname: PropTypes.string, 
    onclick: PropTypes.string,
    title: PropTypes.string
}

export default Arrow;