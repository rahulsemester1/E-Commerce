import React from 'react'

import Item from "../Item/Item";
import new_collections from '../../assets/new_collections';
import "./NewCollections.css";

function NewCollections() {
  return (
    <div className='new-collections'>
      <h1>NEW COLLECTIONS</h1>
      <hr/>
      <div className="collections">
         {new_collections.map((item,i)=>{
           // return <Item key={i} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
           return <Item key={i} props={item}/>
         })}
      </div>

    </div>
  )
}

export default NewCollections