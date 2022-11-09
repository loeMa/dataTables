import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import DataTable from './lib/DataTable';
import { exampleLabels, exampleData } from "./data/data";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<DataTable labels={exampleLabels} data={exampleData}/>
  </React.StrictMode>
);


