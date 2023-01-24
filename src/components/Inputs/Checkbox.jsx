import React from 'react';

const Checkbox = ({ value, handleCheckChanged, checked }) => {
    return (
        <div>
            <label className='flex flex-row gap-x-3 items-center'>
                <input className='w-5 h-5' type='checkbox' onChange={handleCheckChanged} />
                <span>{value}</span>
            </label>
        </div>
    );
};

Checkbox.propTypes = {
    value: String
};
export default Checkbox;