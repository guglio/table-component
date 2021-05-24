import React from 'react';
import Table from '../Table';
import TableHeader from '../TableHeader';
import TableBody from '../TableBody';
import ActionBar from '../ActionBar';
import { arrayOf, object , string, func} from 'prop-types';
import './data-table.css';

const DataTable = ({
    data = [],
    columns = [],
    id,
    selectedRows,
    setSelectedRows,
    ...remainingProps
}) => {
    
    return (<>
        <ActionBar
            selectedRows={selectedRows}
            setSelectedRows={setSelectedRows}
            total={data.length}
            data={data}
            multiSelect={Boolean(selectedRows && setSelectedRows)}
        />
        <Table
            {...remainingProps}
        >
            <TableHeader
                id={id} 
                columns={columns}
                multiSelect={Boolean(selectedRows && setSelectedRows)}
            />
            <TableBody
                id={id} 
                data={data}
                columns={columns}
                selectedRows={selectedRows}
                setSelectedRows={setSelectedRows}
                multiSelect={Boolean(selectedRows && setSelectedRows)}
            />
        </Table>
    </>
    )
}

export default DataTable;


DataTable.propTypes = {
    data: arrayOf(object),
    columns: arrayOf(object),
    id:string,
    selectedRows:arrayOf(string),
    setSelectedRows:func
}