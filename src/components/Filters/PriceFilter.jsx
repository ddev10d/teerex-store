import React from 'react';
import { useState } from 'react';
import Checkbox from '../Inputs/Checkbox';

const PriceFilterOptions = ["0-250", "251-450", ">400"];
const PriceFilter = () => {
    const [checked, setChecked] = useState(false);
    const handleCheckChanged = () => {
        setChecked(!checked);
        console.log(checked);
    };
    return (
        <div>
            <h1>Price</h1>
            <div className='flex flex-col'>
                {
                    PriceFilterOptions.map((value, i) => {
                        return (
                            <Checkbox key={i} value={value} handleCheckChanged={handleCheckChanged} checked={checked} />
                        );
                    })
                }
            </div>
        </div>
    );
};

export default PriceFilter;