import React, { useState, useEffect } from 'react';
import DataTable from './components/DataTable';
import { getData } from './services/';
import classnames from 'classnames';
import './App.css';

const App = () => {
  const [data, setData] = useState([]);
  const COLUMNS = [
    {
      Header: "Name",
      accessor: "name"
    }, {
      Header: "Device",
      accessor: "device"
    }, {
      Header: "Path",
      accessor: "path"
    }, {
      Header: "Status",
      accessor: "status",
      className:"status",
      customFormat: (val) => <span className={classnames('status', val)}>{val}</span>
    }
  ];

  useEffect(() => {
    getData().then(res => setData(res))
  }, []);

  return (
    <div className="App">
      <h1>Table Component</h1>
      <DataTable
        id='data-table'
        data={data}
        columns={COLUMNS}
      />
    </div>
  );
}

export default App;
