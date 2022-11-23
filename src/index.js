import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import DataTable from './lib/DataTable';
import { exampleLabels, exampleData } from "./data/data";
import {StoreProvider} from './lib/utils/storeContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StoreProvider labels={exampleLabels} data={exampleData}>
      <DataTable labels={exampleLabels} data={exampleData}/>
    </StoreProvider>
  </React.StrictMode>
);


