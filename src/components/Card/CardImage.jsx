/* eslint-disable react/prop-types */
import React from 'react';

const CardImage = ({ url }) => {
  return (
    <div className='w-full h-4/5'>
      <img className='w-full h-full object-cover rounded-md' src={url} alt='product' />
    </div>
  );
};

export default CardImage;