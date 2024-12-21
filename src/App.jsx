import { createBrowserRouter,RouterProvider,Route,Router,Routes, createRoutesFromElements } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx"
import Shop from "./Pages/Shop.jsx"
import ShopCategory from "./Pages/ShopCategory.jsx"
import Cart from "./Pages/Cart.jsx"
import Product from "./Pages/Product.jsx"
import LoginSignup from "./Pages/LoginSignup.jsx"
import Layout from "./Layout.jsx"
import men_banner from "./assets/banner_mens.png"
import women_banner from "./assets/banner_women.png"
import kids_banner from "./assets/banner_kids.png"
import "./index.css";

function App() {
   const router=createBrowserRouter(
    [
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
          path:"",
          element:<Shop/>,
        },
        {
        path:"/mens",
        element:<ShopCategory category="men" banner={men_banner}/>,
        },
        { 
          path:"/womens",
          element:<ShopCategory category="women" banner={women_banner}/>,
        },
        {
          path:"/kids",
          element:<ShopCategory category="kid" banner={kids_banner}/>,
        },
        {
          path:"/product",
          element:<Product/>,
        },  
        {
          path:"/product/:productId",
          element:<Product/>,
        },

        {
          path:"/login",
          element:<LoginSignup/>,
        },
        {
          path:"/cart",
          element:<Cart/>,
        }
      ]
    },
  ])

  return (
    <>
       <RouterProvider router={router}/> 
      
    </>
  )
}

export default App
