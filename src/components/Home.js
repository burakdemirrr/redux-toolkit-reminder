import React from 'react'
import products from '../products'
import "./Home.css"
import {addToCart} from "../redux/rootSlice"
import { useDispatch } from 'react-redux'
const Home = () => {
    const dispatch=useDispatch();
  return (
    <div className='home'>
        <h1>Adidas</h1>
        {
            products && products.map((item)=>(
                <div className="ittem">
                    <img src={item.img} alt="" />
                    <div className="item__inner">
                        <p>{item.name}</p>
                        <p>${item.price}</p>
                        <button onClick={()=>dispatch(addToCart({
                            id:item.id,
                            name:item.name,
                            price:item.price,
                            img:item.img
                        }))}>Add to Cart</button>
                    </div>
                </div>
            ))
        }

    </div>
  )
}

export default Home