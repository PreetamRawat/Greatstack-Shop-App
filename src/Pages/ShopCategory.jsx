import React, { useContext } from 'react'
import  './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'

const ShopCategory = (props) => {
  const {all_collection} = useContext(ShopContext)
 
  return (
    <div className='shop-category'>
      <img src={props.banner} alt=''/>
    </div>
  )
}  

export default ShopCategory