import React from 'react'
import Icon from '@mdi/react';
import { mdiCartOutline } from '@mdi/js';

const Cart = () => {
  return (
    <div>
         <Icon path={mdiCartOutline}
            title="User Profile"
            size={1}
            color="white"
            />
    </div>
  )
}

export default Cart