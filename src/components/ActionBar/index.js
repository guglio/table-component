import { number, arrayOf, object, bool, string, func } from 'prop-types';
import './action-bar.css';

const ActionBar = ({
    selectedRows,
    setSelectedRows,
    total,
    data,
    multiSelect
}) => {
    return <div>
        <input type="checkbox"></input>
        <button>Download</button>
    </div>
}

export default ActionBar;

ActionBar.propTypes = {
    selectedRows: arrayOf(string),
    setSelectedRows: func,
    total: number,
    data: arrayOf(object),
    multiSelect: bool
}