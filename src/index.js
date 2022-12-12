import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import DataTable from './lib/DataTable';
import { exampleLabels } from "./data/data";
import exampleData from './data/MOCK_DATA.json'
import {StoreProvider} from './lib/utils/storeContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StoreProvider labels={exampleLabels} data={exampleData}>
      <DataTable labels={exampleLabels} data={exampleData} language={true}
firstBackground={"#038C3E"}
secondBackground={"#DEF4E0"}
arrowColor={"#022601"}/>
    </StoreProvider>
  </React.StrictMode>
);


