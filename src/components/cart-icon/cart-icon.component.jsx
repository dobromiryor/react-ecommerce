import React from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { toggleCardHidden } from '../../redux/cart/cart.actions'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'

import { CartContainer, ShoppingIcon, ItemCountContainer } from './cart-icon.styles';

const CartIcon = ({ toggleCardHidden, itemCount }) => (
  <CartContainer onClick={toggleCardHidden}>
    <ShoppingIcon className='shopping-icon' />
    <ItemCountContainer> {itemCount} </ItemCountContainer>
  </CartContainer >
)

const mapDispatchToProps = dispatch => ({
  toggleCardHidden: () => dispatch(toggleCardHidden())
})

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)