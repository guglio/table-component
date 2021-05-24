import classnames from 'classnames';
import { node, string } from 'prop-types';

const Th = ({ children, className, ...remainigProps }) => {
    return <th
        {...remainigProps}
        className={classnames('table-heading', className)}
    >
        {children}
    </th>
}

export default Th;

Th.propTypes = {
    chidren: node,
    className: string
}