import React from 'react';
import PropTypes from 'prop-types';

const FilterContainer = ({ children }) => {
    return (
        <div className='sticky top-0 flex flex-col gap-y-4 p-8 bg-slate-400 w-1/4 h-4/5'>
            {children}
        </div>
    );
};

FilterContainer.propTypes = {
    children: PropTypes.func
};

export default FilterContainer;