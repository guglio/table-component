import classnames from 'classnames';
import { node, string } from 'prop-types';

const Tr = ({ children, className, ...remainigProps }) => {
    return <tr
        {...remainigProps}
        className={classnames('table-row', className)}
    >
        {children}
    </tr>
}

export default Tr;

Tr.propTypes = {
    chidren: node,
    className: string
}