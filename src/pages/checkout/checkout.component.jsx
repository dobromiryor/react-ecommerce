import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors'

import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'

import './checkout.styles.scss'

const CheckoutPage = ({ cartItems, total }) => (
 <div className='checkout-page'>
   <div className='checkout-header'>
     <div className='header-block'>
       <span>Product</span>
     </div>
     <div className='header-block'>
       <span>Description</span>
     </div>
     <div className='header-block'>
       <span>Quantity</span>
     </div>
     <div className='header-block'>
       <span>Price</span>
     </div>
     <div className='header-block'>
       <span>Remove</span>
     </div>
   </div>
   {
     cartItems.map(cartItem =>(
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
     ))
   }
   <div className='row jc-sb w-100p'>
    <div className='info'>
      <h3>Test card info</h3>
      <div className='row'>Card number: <div> 4242 4242 4242 4242</div></div>
      <div className='row'>EXP: <div> Any future date</div></div>
      <div className='row'>CW: <div> Any 3 digits</div></div>
    </div>
    <div className='total'>
      <span>TOTAL: ${total}</span>
      <StripeCheckoutButton price={total}/>
    </div>
   </div>
 </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);