import React, { useContext } from 'react'
import "./Navbar.css"
import logo from "../assets/logo.png"
import cart_icon from "../assets/cart_icon.png"
import {Link,NavLink} from "react-router-dom";
import { ShopContext } from '../Context/ShopContext';
import { useAuth0} from "@auth0/auth0-react";


function Navbar() {
   let {cartItems}=useContext(ShopContext);
   const { loginWithRedirect,isAuthenticated,logout } = useAuth0();
   
   const getNavLinkStyle=({isActive})=>{
      return{
         color:isActive?"red":"black",
         textDecoration:isActive?"underline":"none"
      }
   }

   let getTotalQuantity=()=>{
      let quantity=0;
      for(let item in cartItems){
         if(cartItems[item]>0){
            quantity+=cartItems[item]
         }
      }
      console.log(quantity);  
       return quantity;
   }

  return (
    <div className="navbar">
      <div className="nav-logo">
         <img src={logo} alt=""/>
         <p>SHOPPER</p>
      </div>   

      <div className="nav-menu">
         <NavLink to="/" className="nav-menu-link" style={getNavLinkStyle}>Shop</NavLink>
         <NavLink to="/mens" className="nav-menu-link" style={getNavLinkStyle}>Men</NavLink>
         <NavLink to="/womens" className="nav-menu-link" style={getNavLinkStyle}>Women</NavLink>
         <NavLink to="/kids" className="nav-menu-link" style={getNavLinkStyle}>Kids</NavLink>
      </div>
        
 
         {/* <ul>
      {isAuthenticated? <li><button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button></li> :  <li> <button onClick={() => loginWithRedirect()}>Login</button></li> } 
      </ul>  */}
         
   
      {/* <NavLink to="/cart"> <img src={cart_icon}  />  
      </NavLink> */}
        
        <div className="nav-login-cart">
        <NavLink to="/login"><button>Login</button></NavLink>
         {/* {isAuthenticated? <li><button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button></li> :  <li> <button onClick={() => loginWithRedirect()}>Login</button></li> }  */}
        
        {/* {isAuthenticated? <li><button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button></li> :  <li> <button onClick={() => loginWithRedirect()}>Login</button></li> } 
      */}
       <NavLink to="/cart"> <img src={cart_icon}  /> </NavLink> 
       {/* <div className="nav-cart-count" onClick={()=>{getTotalQuantity()}}>0</div> */}
      <div className="nav-cart-count" >{getTotalQuantity()}</div>
       
      </div>
    </div>
  )
}

export default Navbar