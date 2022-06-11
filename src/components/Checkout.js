import React from 'react'
import { initializeUseSelector } from 'react-redux/es/hooks/useSelector';

export const Checkout = () => {
  const cart=initializeUseSelector(state=>state.root.cartItems);
  return (
    <div>{
         cart &&cart.map(item=>(
          <div className="">{item.name}</div>
        ))
      }</div>
  )
}
