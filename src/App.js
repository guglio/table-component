import React, { useState, useEffect } from 'react';
import DataTable from './components/DataTable';
import { getData } from './services/';
import './App.css';

const App = () => {
  const [data, setData] = useState([]);
  const columns = [];
  useEffect(() => {
    getData().then(res => setData(res))
  }, []);

  return (
    <div className="App">
      <h1>Table Component</h1>
      <DataTable
        data={data}
        columns={columns}
      />
    </div>
  );
}

export default App;
