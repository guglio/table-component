import React, { useCallback } from 'react';
import { ReactComponent as DownloadIcon } from '../../assetts/file_download_black_24dp.svg';
import { number, arrayOf, object, bool, string, func } from 'prop-types';
import './action-bar.css';

const ActionBar = ({
    selectedRows,
    setSelectedRows,
    total,
    data,
    multiSelect
}) => {

    const selectedRowsLength = useCallback(() => selectedRows.filter(r => r).length, [selectedRows]);

    return <div className='action-bar'>
        <div>
            <input type="checkbox"></input>
        </div>
        <div className="selected-count">
            {
                selectedRowsLength() > 0
                    ?
                    `Selected ${selectedRowsLength()}`
                    :
                    'None Selected'
            }
        </div>
        <div>
            <button><DownloadIcon /> Download</button>
        </div>
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