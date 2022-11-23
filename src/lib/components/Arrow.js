import React, { useContext } from 'react';
import { StoreContext } from '../utils/storeContext';

const Arrow = ({classname, onclick, title}) => {

    const {store} = useContext(StoreContext);

    const nextData = () =>{
        store.indexEnd[1](store.indexEnd[0] + store.length[0]);
        store.indexStart[1](store.indexStart[0] + store.length[0]);
        store.count[1](store.count[0] - store.length[0])
        store.dataArr[1](store.dataArr[0])
    }
    const previousData= () =>{
        store.indexEnd[1](store.indexEnd[0] - store.length[0]);
        store.indexStart[1](store.indexStart[0] - store.length[0]);
        store.count[1](store.count[0] + store.length[0]);
        store.dataArr[1](store.dataArr[0])
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

export default Arrow;