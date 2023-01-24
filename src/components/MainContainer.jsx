import React from 'react';

const MainContainer = ({ children }) => {
    return (
        <div className='mt-8 mx-5 flex flex-row gap-x-24'>
            {children}
        </div>
    );
};

MainContainer.propTypes = {
    children: React.ReactNode
};

export default MainContainer;