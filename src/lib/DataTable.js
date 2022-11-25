import React, { useContext} from 'react';
import Arrow from './components/Arrow';
import Search from './components/Search';
import SortData from './components/SortData';
import TableLength from './components/TableLength';
import './datatable.css';
import { StoreContext } from './utils/storeContext';
import PropTypes from 'prop-types'
import Pagination from './components/Pagination';
import { useState } from 'react';
import Column from './components/Column';
import Row from './components/Row';


/**
 * table's labels and data 
 * @param {Object[]} labels - column title of the table
 * @param {string} labels.text - the text title of the column
 * @param {string} labels.value - the value of the column
 * @param {Object[]} data - all data for rows in the table
 * @returns { HTMLElement }
 */
const DataTable = ({labels, data}) => {

    const [english, setEnglish] = useState(false);
    
    const {store} = useContext(StoreContext)
/*     const [length, setLength] = useState(10);
    const [indexStart , setIndexStart] = useState(0);
    const [indexEnd, setIndexEnd] = useState(length);
    const [ count, setCount] = useState(data.length);
    const limitedArray = useRef(data);
    const [toggleClick, setToggleClick] = useState(false)
    const [lastSpan, setLastSpan] = useState()
    limitedArray.current =  data.slice(indexStart, indexEnd)
    
    const [dataArr, setDataArr] = useState(data)

    const {store} = useContext(StoreContext)
console.log(store)
    useEffect(() =>{
        
    },[ dataArr, limitedArray])
     */

  

    return (
        <div className='dataTable__wrapper'>
            <div className='dataTable__header'>
                <TableLength data={data} language={english} />
                <Search labels={labels} data={data} language={english} />
            </div>
            <table /* style={{width: 'auto', heigth:'auto', padding: '5px 10px'}} */ className='table' >
                <thead >
                    <tr className='column' >
                        {labels.map((label, i) =>{
                            return <Column key={i} label={label} />
                        })}
                    </tr>
                </thead>
                <tbody>
                    
                        {store.dataArr[0].length > 0 ?
                        Object.values( store.dataArr[0].slice(store.indexStart[0], store.indexEnd[0])).map((obj, index) =>{
                            return <Row key={index} obj={obj} />
                            
                        }) :
                        <tr>
                            <td>Aucune donnée de disponible </td>
                        </tr>
                        }   
                    
                </tbody>
            </table>
            <div className='dataTable__footer'>
                { store.totalPage[0] > 1 && store.currentPage[0] > 1 ?
                    <Arrow classname={'previous'} onclick={'previousData'} title={english? "Previous" : "Précédent "} />
                    :
                    <div></div>
                }

                <Pagination />

                { store.currentPage[0] < store.totalPage[0] &&
                    <Arrow classname={'nextBtn'} onclick={'nextData'} title={english? "Next" : "Suivant " }  />
                }
            </div>
        </div>
    );
};

DataTable.propTypes = {
    labels: PropTypes.array, 
    data: PropTypes.array
}

export default DataTable;