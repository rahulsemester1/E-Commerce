import React from 'react'
import Item from "../Item/Item"
import "./Popular.css"
import data_product from "../../assets/data"

function Popular() {
  return ( 
    <div className='popular'>
      <h1>POPULAR IN WOMAN</h1>
      <hr/>
      <div className="popular-item">
         {data_product.map((item,i)=>{
            //return <Item key={i} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            return <Item key={i} props={item}/>
         })}
      </div>
    </div>
  )
}

export default Popular