import React, { useContext} from 'react';
import Arrow from './components/Arrow';
import Search from './components/Search';
import SortData from './components/SortData';
import TableLength from './components/TableLength';
import './datatable.css';
import { StoreContext } from './utils/storeContext';
import PropTypes from 'prop-types'


/**
 * table's labels and data 
 * @param {Object[]} labels - column title of the table
 * @param {string} labels.text - the text title of the column
 * @param {string} labels.value - the value of the column
 * @param {Object[]} data - all data for rows in the table
 * @returns { HTMLElement }
 */
const DataTable = ({labels, data}) => {

    
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
                <TableLength data={data}/>
                <Search labels={labels} data={data}/>
            </div>
            <table style={{width: 'auto', heigth:'auto', padding: '5px 10px'}} className='table' >
                <thead >
                    <tr className='column' >
                        {labels.map((label, i) =>{
                            return <th key={i} className='column__content' >
                                        <h4>{label.text}</h4>
                                        <SortData label={label.value} />
                                    </th>
                        })}
                    </tr>
                </thead>
                <tbody>
                    
                        {store.dataArr[0].length > 0 ?
                        Object.values( store.dataArr[0].slice(store.indexStart[0], store.indexEnd[0])).map((obj, index) =>{
                            return <tr key={index}>
                                {Object.values(obj).map((value, index2) =>{
                                    return <td key={index2} >{value}</td>
                                })}
                            </tr>
                        }) :
                        <tr>
                            <td>Aucune donnée de disponible </td>
                        </tr>
                        }   
                    
                </tbody>
            </table>
            { store.count[0] < store.dataArr[0].length && 
                <Arrow classname={'previous'} onclick={'previousData'} title={'précédent'} />
            }
            {store.count[0] > store.length[0] && store.dataArr[0].length > store.length[0] && 
                <Arrow classname={'nextBtn'} onclick={'nextData'} title={'suivant'} />
            }
            
        </div>
    );
};

DataTable.propTypes = {
    labels: PropTypes.array, 
    data: PropTypes.array
}

export default DataTable;