import React, { useContext } from 'react';
import { StoreContext } from '../utils/storeContext';

const SortData = (label) => {

    const {store} = useContext(StoreContext)

    const sortData = column => (e) =>{

        let arrowBottom = document.querySelector(`.arrow__bottom.${store.lastSpan[0]}` )
        let arrowTop = document.querySelector(`.arrow__top.${store.lastSpan[0]}` )
    
        store.lastSpan[1](column)
    
        arrowTop != null && 
            arrowTop.classList.remove('arrow--active') 
            arrowBottom != null &&
            arrowBottom.classList.remove('arrow--active')
            
            const sort = () =>{
                return Object.keys(store.dataArr[0]).sort((a, b) => {
                    const dataColumn = new Date(store.dataArr[0][a][column])
                    if(store.toggleClick[0] === false){
                        if(dataColumn > 0){
                            
                            e.currentTarget.childNodes[0].classList.add('arrow--active');
                            store.toggleClick[1](true)
                            return  new Date(store.dataArr[0][a][column]) - new Date(store.dataArr[0][b][column]);
                        }else{
                            let fa = store.dataArr[0][a][column].toLowerCase(),
                            fb = store.dataArr[0][b][column].toLowerCase();
                            store.toggleClick[1](true)
                            
                            e.currentTarget.childNodes[0].classList.add('arrow--active');
                        return (fa > fb) ? 1 : (fa < fb)? -1 : 0 ; 
                        }
                    }else{
                        if(dataColumn > 0){
                            
                            e.currentTarget.childNodes[1].classList.add('arrow--active');
                            store.toggleClick[1](false)
                            return  new Date(store.dataArr[0][b][column]) - new Date(store.dataArr[0][a][column]);
                        }else{
                            let fa = store.dataArr[0][a][column].toLowerCase(),
                            fb = store.dataArr[0][b][column].toLowerCase();
                            
                            e.currentTarget.childNodes[1].classList.add('arrow--active');
                            store.toggleClick[1](false)
                        return (fa < fb) ? 1 : (fa > fb)? -1 : 0 ; 
                        }
                    }
                
            }
            ).map(found => ({...store.dataArr[0][found]})) 
        }
            
            const result = sort()
            store.dataArr[1](result)
            store.indexStart[1](0)
            store.indexEnd[1](store.length[0])
            store.count[1](store.dataArr[0].length)
        }


    return (
        <div className='arrow' onClick={sortData(label.label)} >
            <span className={'arrow__top '+label.label}  > &#9650;</span>
            <span className={'arrow__bottom ' +label.label}  >  &#9660;</span>
        </div>
    );
};

export default SortData;