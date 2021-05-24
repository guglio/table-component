import React, { useCallback } from 'react';
import Tbody from '../Tbody';
import Tr from '../Tr';
import Td from '../Td';
import CheckBox from '../CheckBox';
import classnames from 'classnames';
import { arrayOf, string, object, func, bool } from 'prop-types';

const TableBody = ({
    id,
    data,
    columns,
    className,
    selectedRows,
    setSelectedRows,
    multiSelect,
    ...remainingProps
}) => {


    const handleCheck = useCallback(value => {
        let currentSelected = [...selectedRows];

        if (currentSelected[value]) {
            currentSelected[value] = null;
        }
        else
            currentSelected[value] = value

        setSelectedRows(() => [...currentSelected]);
    }, [selectedRows, setSelectedRows]);

    return (
        <Tbody
            {...remainingProps}
            className={classnames(className)}
        >
            {
                data.map((currRow, i) =>
                    <Tr
                        key={`row-${id}-${i}`}
                    >
                        {
                            multiSelect ? <Td
                                id={`headerCol-${id}-checkbox-${i}`}
                            >
                                {/* <input
                                    type="checkbox"
                                    value={i}
                                    onChange={(e) => handleCheck(e.target.value)}
                                    checked={Boolean(selectedRows[i])}
                                /> */}
                                <CheckBox
                                    className="checkbox-select"
                                    value={i}
                                    onChange={(e) => handleCheck(e.target.value)}
                                    checked={Boolean(selectedRows[i])}
                                />
                            </Td> : undefined
                        }
                        {columns.map((currCol, i) => {

                            let key = `col-${id}-${i}`;
                            let currValue = currRow[currCol.accessor];
                            return (
                                <Td
                                    key={key}
                                    id={key}
                                >
                                    {currCol.customFormat ? currCol.customFormat(currValue) : currValue}
                                </Td>
                            )
                        })}
                    </Tr>
                )
            }

        </Tbody>
    )
}

export default TableBody;

TableBody.propTypes = {
    id: string,
    data: arrayOf(object),
    columns: arrayOf(object),
    className: string,
    selectedRows: arrayOf(string),
    setSelectedRows: func,
    multiSelect: bool
}