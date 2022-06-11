import React from 'react'
import { initializeUseSelector, useSelector } from 'react-redux/es/hooks/useSelector';

export const Checkout = () => {
  const cart=useSelector(state=>state.root.cartItems);
  return (
    <div>{
         cart && cart.map(item=>(
          <div className="cartItem" key={item.id}>

              <img src={item.img} alt="" />
              <div className="">
                <p>{item.name}</p>
                <p>{item.price}</p>
              </div>
            </div>
        ))
      }</div>
  )
}
