import React from 'react';
import Table from '../Table';
import TableHeader from '../TableHeader';
import TableBody from '../TableBody';
import { arrayOf, object } from 'prop-types';

const DataTable = ({
    data,
    columns,
    ...remainingProps
}) => {
    return (<>
        <div>Action Bar Here</div>
        <Table
            {...remainingProps}
        >
            <TableHeader 
                columns={columns}
            />
            <TableBody
                data={data}
                columns={columns}
            />
        </Table>
    </>
    )
}

export default DataTable;


DataTable.propTypes = {
    data: arrayOf(object),
    columns: arrayOf(object)
}