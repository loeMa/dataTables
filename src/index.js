import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import DataTable from './lib/DataTable';
import {StoreProvider} from './lib/utils/storeContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StoreProvider >
      <DataTable />
    </StoreProvider>
  </React.StrictMode>
);


