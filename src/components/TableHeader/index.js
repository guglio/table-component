import React from 'react';
import Thead from '../Thead';
import Tr from '../Tr';
import Th from '../Th';

const TableHeader = props => {
    return <Thead>
                <Tr>
                    <Th>Header</Th>
                </Tr>
            </Thead>
}

export default TableHeader;