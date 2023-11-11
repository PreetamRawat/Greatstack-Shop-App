import React, { useContext } from 'react'
import  './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Item from '../Components/Item/Item.jsx'

const ShopCategory = (props) => {
  const {all_collection} = useContext(ShopContext)
//  console.log(all_collection);

  return (
    <div className='shop-category'>
    <h1>chjchhdh</h1>
      <img src={props.banner} alt=''/>
      <div className='shopcategory-indexSort'>
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className='shopcategory-sort'>
          Sort by <img src={ArrowDropDownIcon} alt='' />
        </div>
      </div>
      <div className='shopcategory-products'>
        {
          all_collection.map((item,i)=>{
            if(props.category===item.category){
              return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            }
            else{
              return null;
            }
          })
        }
      </div>
    </div>
  )
}  

export default ShopCategory