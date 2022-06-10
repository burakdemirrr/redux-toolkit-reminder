import React from 'react'
import {AiFillShopping} from "react-icons/ai"
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate=useNavigate();
  return (
    <div>
       <a href="/checkout" className='icon'><AiFillShopping/></a>
    </div>
  )
}

export default Header