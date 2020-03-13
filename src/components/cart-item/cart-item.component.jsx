import React from 'react';

import { CartItemContainer, ItemDetails } from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <img style={{ width: '30%' }} src={imageUrl} alt='item' />
    <ItemDetails>
      <span style={{ fontSize: '16px' }} className='name'>{name}</span>
      <span className='price'>{quantity} x ${price}</span>
    </ItemDetails>
  </CartItemContainer>
)

export default CartItem;
