import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import DataTable from './lib/DataTable';
import {StoreProvider} from './lib/utils/storeContext';
import {exampleLabels} from './data/data-mock';
import exampleData from './data/MOCK_DATA.json';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StoreProvider data={exampleData} >
      <DataTable labels={exampleLabels} data={exampleData}/>
    </StoreProvider>
  </React.StrictMode>
);


