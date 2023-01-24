import React from 'react';
import Checkbox from '../Inputs/Checkbox';

const GenderFilterOptions = ["Men", "Women"];

const GenderFilter = () => {
    return (
        <div>
            <h1>Gender</h1>
            <div className='flex flex-col'>
                {
                    GenderFilterOptions.map((value, i) => {
                        return (
                            <Checkbox key={i} value={value} />
                        );
                    })
                }
            </div>
        </div>
    );
};

export default GenderFilter;