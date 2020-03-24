import React from 'react';

import { CartItemContainer, ItemDetails, CartItemImage } from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <CartItemImage src={imageUrl} alt='item' />
    <ItemDetails>
      <span>{name}</span>
      <span>{quantity} x ${price}</span>
    </ItemDetails>
  </CartItemContainer>
)

export default CartItem;
