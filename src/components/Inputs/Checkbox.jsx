import React from 'react';
import PropTypes from 'prop-types';
const Checkbox = ({ value, handleCheckChanged, checked }) => {
    return (
        <div>
            <label className='flex flex-row gap-x-3 items-center'>
                <input className='w-5 h-5' type='checkbox' checked={checked} onChange={handleCheckChanged} />
                <span>{value}</span>
            </label>
        </div>
    );
};

Checkbox.propTypes = {
    value: String,
    handleCheckChanged: PropTypes.func,
    checked: PropTypes.bool

};
export default Checkbox;