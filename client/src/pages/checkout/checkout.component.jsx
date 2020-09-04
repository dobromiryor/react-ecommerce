import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors'

import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'

import { CheckoutPageContainer, CheckoutHeaderContainer, HeaderBlockContainer, BottomContainer, TotalContainer, TotalTextContainer, WarningContainer } from './checkout.styles';

const CheckoutPage = ({ cartItems, total }) => (
 <CheckoutPageContainer>
   <CheckoutHeaderContainer>
     <HeaderBlockContainer>
       <span>Product</span>
     </HeaderBlockContainer>
     <HeaderBlockContainer>
       <span>Description</span>
     </HeaderBlockContainer>
     <HeaderBlockContainer>
       <span>Quantity</span>
     </HeaderBlockContainer>
     <HeaderBlockContainer>
       <span>Price</span>
     </HeaderBlockContainer>
     <HeaderBlockContainer>
       <span>Remove</span>
     </HeaderBlockContainer>
   </CheckoutHeaderContainer>
   {
     cartItems.map(cartItem =>(
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
     ))
   }
   <BottomContainer>
    <WarningContainer>
      <h3>Test card info</h3>
      <div className='row'>Card number: <div> 4242 4242 4242 4242</div></div>
      <div className='row'>EXP: <div> Any future date</div></div>
      <div className='row'>CW: <div> Any 3 digits</div></div>
    </WarningContainer>
    <TotalContainer>
      <TotalTextContainer>TOTAL: ${total}</TotalTextContainer>
      <StripeCheckoutButton price={total}/>
    </TotalContainer>
   </BottomContainer>
 </CheckoutPageContainer>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);