import React from 'react';
import Checkbox from '../Inputs/Checkbox';

const TypeFilterOptions = ["Polo", "Hoodie", "Basic"];

const TypeFilter = () => {
    return (
        <div>
            <h1>Type</h1>
            <div className='flex flex-col'>
                {
                    TypeFilterOptions.map((value, i) => {
                        return (
                            <Checkbox key={i} value={value} />
                        );
                    })
                }
            </div>
        </div>
    );
};

export default TypeFilter;