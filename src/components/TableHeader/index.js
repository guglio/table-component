import React from 'react'
import Thead from '../Thead';
import Tr from '../Tr';
import Th from '../Th';
import classnames from 'classnames';
import { arrayOf, string, object, bool } from 'prop-types';
import './table-header.css';

const TableHeader = ({
    columns = [],
    id,
    className,
    multiSelect,
    ...remainingProps
}) => {
    return (
        <Thead {...remainingProps} className={classnames(className)}>
            <Tr className="header-row">
                {
                    multiSelect ? <Th
                        id={`header-col-${id}-checkbox`}
                    /> : undefined
                }
                {columns.map((item, i) => {
                    let key = `header-col-${id}-${i}`;
                    return (
                        <Th
                            key={key}
                            id={key}
                            className={classnames(item.className)}
                        >
                            {item.Header}
                        </Th>
                    )
                })}
            </Tr>
        </Thead>)
}

export default TableHeader;

TableHeader.propTypes = {
    columns: arrayOf(object),
    id: string,
    className: string,
    multiSelect: bool
}