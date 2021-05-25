import classnames from 'classnames';
import { node, string } from 'prop-types';
import './th.css';

const Th = ({ children, className, ...remainigProps }) => {
    return <th
        {...remainigProps}
        className={classnames('table-heading', 'table-col',className)}
    >
        {children}
    </th>
}

export default Th;

Th.propTypes = {
    chidren: node,
    className: string
}