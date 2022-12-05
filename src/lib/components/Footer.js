import React, { useContext } from 'react';
import { StoreContext } from '../utils/storeContext';
import Arrow from './Arrow';
import Pagination from './Pagination';
import PropTypes from 'prop-types';


/**
 * Footer of the Table
 * @param {boolean} english - to set the language 
 * @param {string} footer - className of the footer
 * @returns { HTMLElement }
 */
const Footer = ({language, footer, firstBackground, secondBackground, color}) => {

    const {store} = useContext(StoreContext)

    return (
        <div className={`dataTable__footer ${footer}`}>
            <div className='dataTable__footer__entries'>
                {language? <p>Showing {store.indexStart[0]+1} to {store.indexEnd[0]} of {store.dataArr[0].length} entries</p> 
                : <p>Affichage de {store.indexStart[0]+1} à {store.indexEnd[0]} sur {store.dataArr[0].length} données</p>
                }
            </div>
            <div className='dataTable__footer__pagination'>
            { store.totalPage[0] > 1 && store.currentPage[0] > 1 ?
                    <Arrow classname={'previous'} onclick={'previousData'} title={language? "Previous" : "Précédent "} />
                    :
                    <div></div>
                }

                <Pagination language={language} firstBackground={firstBackground} secondBackground={secondBackground} color={color} />

                { store.currentPage[0] < store.totalPage[0] &&
                    <Arrow classname={'nextBtn'} onclick={'nextData'} title={language? "Next" : "Suivant " }  />
                }
            </div>
        </div>
    );
};

Footer.propTypes = {
    language: PropTypes.bool,
    footer: PropTypes.string
}

export default Footer;