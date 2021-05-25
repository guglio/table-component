import classnames from 'classnames';
import { node, string } from 'prop-types';

const Thead = ({ children, className, ...remainigProps }) => {
    return <thead
        {...remainigProps}
        className={classnames('table-header', className)}
    >
        {children}
    </thead>
}

export default Thead;


Thead.propTypes = {
    chidren: node,
    className: string
}