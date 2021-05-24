import React, { useCallback, useState, useEffect } from 'react';
import { ReactComponent as DownloadIcon } from '../../assetts/file_download_black_24dp.svg';
import { number, arrayOf, object, string, func } from 'prop-types';
import Checkbox from '../CheckBox';
import './action-bar.css';

const ActionBar = ({
    selectedRows,
    setSelectedRows,
    total,
    data
}) => {

    const [downloadAvailable, setDownloadAvailable] = useState(false);

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

    const handleClick = () => {
        const messagesFile = selectedRows
            .filter(r => r)
            .reduce((acc, i) => acc = [...acc, `path: ${data[i].path}\ndevice: ${data[i].device}`], []);

        let alertMessage = `List of file(s) available to download:\n\n${messagesFile.join('\n------------------------n')}`
        
        console.log(alertMessage);

        window.alert(alertMessage)
    }


    useEffect(() => {
        
        const checkStatus = () => {
            function isAvailable(curr) { return curr.status === 'available' };
            return selectedRowsLength() > 0 ? selectedRows.filter(r => r).every(i => isAvailable(data[i])) : false;
        };

        setDownloadAvailable(checkStatus());

    },[selectedRows,data, selectedRowsLength,setDownloadAvailable])

    return <div className='action-bar'>
        <div>
            <Checkbox
                status={`${selectAllStatus()}`}
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
            <button
                disabled={!downloadAvailable}
                onClick={() => handleClick()}
            >
                <DownloadIcon
                    aria-hidden="true"
                    focusable="false"
                />
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
    data: arrayOf(object)
}