import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishableKey = 'pk_test_51HIa4kDHTztIH88FFUZzmBwAQFEXsdA7VXkxNr4vDvSAjeiGOWCpgwiT6oZYII6PGAxtqeLXmdIs8tBiPzTr6MX7004OMr5oY1'

  const onToken = (token) => {
    console.log(token)
    alert('payment successful')
  }

  return(
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='http://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton