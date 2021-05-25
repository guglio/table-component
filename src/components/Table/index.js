import classnames from 'classnames';
import { node, string } from 'prop-types';
import './table.css';

const Table = ({
  children,
  className,
  ...remainingProps
}) => {

  return <table
        {...remainingProps}
        className={classnames('table', className)}
    >
        {children}
    </table>
}

export default Table;

Table.propTypes = {
  children: node,
  className: string
}