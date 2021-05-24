import React from 'react';
import Table from '../Table';
import TableHeader from '../TableHeader';
import TableBody from '../TableBody';
import { arrayOf, object , string} from 'prop-types';

const DataTable = ({
    data = [],
    columns = [],
    id,
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
            />
        </Table>
    </>
    )
}

export default DataTable;


DataTable.propTypes = {
    data: arrayOf(object),
    columns: arrayOf(object),
    id:string
}