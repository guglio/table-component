
import Tbody from '../Tbody';
import Tr from '../Tr';
import Td from '../Td';
import classnames from 'classnames';
import { arrayOf, string, object } from 'prop-types';

const TableBody = ({
    id,
    data,
    columns,
    className,
    ...remainingProps
}) => {

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
}