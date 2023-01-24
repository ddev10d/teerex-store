import { number, string } from 'prop-types';
import React from 'react';
import CardImage from './CardImage';

const CardContainer = ({ imgURL, price }) => {

  return (
    <div className='w-72 h-64 bg-slate-800 p-2 rounded-md'>
      <CardImage url={imgURL} />
      <div className='flex justify-between pt-4 items-center'>
        <span className='bg-slate-200 rounded-md px-2'>{price}</span>
        <button className='rounded-lg bg-black text-zinc-50 px-3 py-1'>Add to Cart</button>
      </div>
    </div>
  );
};

CardContainer.propTypes = {
  imgURL: string,
  price: number
};

export default CardContainer;