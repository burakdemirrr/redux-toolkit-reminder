import React from 'react'
import products from '../products'
import "./Home.css"

const Home = () => {
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
                        <button>Add to Cart</button>
                    </div>
                </div>
            ))
        }

    </div>
  )
}

export default Home