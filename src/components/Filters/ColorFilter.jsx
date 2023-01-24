import React from 'react';
import Checkbox from '../Inputs/Checkbox';

const ColorFilterOptions = ["Red", "Green", "Blue"];

const ColorFilter = () => {
    return (
        <div>
            <h1>Color</h1>
            <div className='flex flex-col'>
                {
                    ColorFilterOptions.map((value, i) => {
                        return (
                            <Checkbox key={i} value={value} />
                        );
                    })
                }
            </div>
        </div>
    );
};

export default ColorFilter;