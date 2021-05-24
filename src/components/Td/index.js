import classnames from 'classnames';
import { node, string } from 'prop-types';

const Td = ({ children, className, ...remainigProps }) => {
    return <td
        {...remainigProps}
        className={classnames('table-col', className)}
    >
        {children}
    </td>
}

export default Td;

Td.propTypes = {
    chidren: node,
    className: string
}