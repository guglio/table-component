import React from 'react';
import Table from '../Table';
import TableHeader from '../TableHeader';
import TableBody from '../TableBody';
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
        <div>Action Bar Here</div>
        <Table
            {...remainingProps}
        >
            <TableHeader
                id={id} 
                columns={columns}
            />
            <TableBody
                id={id} 
                data={data}
                columns={columns}
                selectedRows={selectedRows}
                setSelectedRows={setSelectedRows}
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