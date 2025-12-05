import { useState } from 'react'
import Home from './component/Home/Home'
import Navbar from './component/Navbar/Navbar'
import Layout from './component/Layout/Layout'
import Login from './component/Login/Login'
import Notfound from './component/Notfound/Notfound'
import Brands from './component/Brands/Brands'
import Carts from './component/Carts/Carts'
import Products from './component/Products/Products'
import Register from './component/Register/Register'
import UserContextProvider, { userContext } from './context/userContext'
import ProductedRoutes from './component/ProductedRoutes/ProductedRoutes'
import ProductDetails from './component/ProductDetails/ProductDetails'
import { createBrowserRouter, RouterProvider } from "react-router-dom";


let routers = createBrowserRouter([
  {path:'' , element:<Layout/> , children:[
    {index:true , element:<ProductedRoutes><Products/></ProductedRoutes>},
    {path:'login' , element:<Login/>},
    {path:'register' , element:<Register/>},
    {path:'brands' , element:<ProductedRoutes><Brands/></ProductedRoutes>},
    {path:'productDetails/:id' , element:<ProductedRoutes><ProductDetails/></ProductedRoutes>},
    {path:'carts' , element:<ProductedRoutes><Carts/></ProductedRoutes>},
    {path:'*' , element:<Notfound/>}
  ]}
])

function App() {

  return (
    <>
    <UserContextProvider>
    <RouterProvider router = {routers}></RouterProvider>
    </UserContextProvider>
    </>
  )
}


export default App
