import React, { useCallback } from 'react';
import { ReactComponent as DownloadIcon } from '../../assetts/file_download_black_24dp.svg';
import { number, arrayOf, object, bool, string, func } from 'prop-types';
import Checkbox from '../CheckBox';
import './action-bar.css';

const ActionBar = ({
    selectedRows,
    setSelectedRows,
    total,
    data,
    multiSelect
}) => {

    const selectedRowsLength = useCallback(() => selectedRows.filter(r => r).length, [selectedRows]);

    const selectAllStatus = useCallback(() => {
        switch(selectedRowsLength()){
            case 0: return false;
            case total: return 'checked';
            default: return 'half'
        }
    },[selectedRowsLength, total])

    const handleChange = () => {
        let selected = [...selectedRows];

        if(selectAllStatus() !== 'checked'){
            for(let i=0; i<total; i++){
                if(!selected[i]) selected[i] = `${i}`;
            }
        }

        else{
            selected = [];
        }

        setSelectedRows(selected);
    }


    return <div className='action-bar'>
        <div>
            <Checkbox
                status={selectAllStatus()}
                checked={Boolean(selectAllStatus())}
                onChange={() => handleChange()}
            />
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
            <button>
                <DownloadIcon />
                <span>Download Selected</span>
            </button>
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