import classnames from 'classnames';
import { bool, string, func , number} from 'prop-types';
import './checkbox.css';

const CheckBox = ({
    checked,
    onChange,
    className,
    value,
    status
}) => {
    return (
        <label
            className={classnames("container", className)}
        >
            <input
                type="checkbox"
                checked={checked}
                onChange={onChange}
                value={value}
            />
            <span
                className={classnames("checkmark", status ? status : checked ? 'checked' : '')}
            />
        </label>)
}

export default CheckBox;

CheckBox.propTypes = {
    checked: bool,
    onChange: func,
    className: string,
    value: number,
    status: string
}