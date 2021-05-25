import Classnames from 'classnames';
import { string, node } from 'prop-types';

const Tbody = ({ children, className, ...remainigProps }) => {
    return <tbody
        {...remainigProps}
        className={Classnames('table-body', className)}
    >
        {children}
    </tbody>
}

export default Tbody;

Tbody.propTypes = {
    chidren: node,
    className: string
}