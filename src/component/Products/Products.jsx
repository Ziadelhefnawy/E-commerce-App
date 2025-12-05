import React, { useContext , useState , useEffect} from 'react'
import axios from 'axios'
import Loader from '../Loader/Loader'
import { Link } from 'react-router-dom'
import {cartContext} from '../../context/cartContext'
import toast from "react-hot-toast"
function Products() {
    let {addProductToCart} = useContext(cartContext); 
    const [product, setProduct] = useState([])
    const [isLoading, setLoading] = useState(true)
    async function addProductItem(id){
    let response = await addProductToCart(id)
    console.log('response',response);   
    if(response.data.status=='success'){
            toast.success(response.data.message)
          }
          else{
            toast.error(response.data.message)
          }
    

  }

function getProducts(){
    axios.get('https://ecommerce.routemisr.com/api/v1/products')
    .then( (response)=>{console.log("response" , response.data.data)
    setLoading(false)
    setProduct(response.data.data)} )

    .catch( (error)=>{console.log("error",error) 
        setLoading(false)
    } 

)
}

useEffect( ()=>{

    getProducts();

} , [])


return (
<div className="container">
    {
        !isLoading?
        <div className="d-flex flex-wrap">
        {product.map( (productInfo)=>{
          return(
            <>
            <div className="w-25 px-4 styleProduct">
              <Link to = {`/productDetails/${productInfo.id}`}>
            <img src={productInfo.imageCover} className="w-100" alt={productInfo.title} />
            <span className="text-info d-block"> {productInfo.category.name} </span>
            <span className=" d-block"> {productInfo.title.split(' ').slice(0,3).join(' ')} </span>

            <div className="d-flex justify-content-between my-2">

            <span>{productInfo.price} EGP</span>
            <span>{productInfo.ratingsQuantity}<i className="fas fa-star text-warning"></i></span>
              
            </div>
            </Link>
            <button onClick= {()=>{addProductItem(productInfo.id)}} className='btn bg-secondary text-white p-2 m-2 w-100'>Add To Cart</button>
            </div>
            </>
          ) 
        
        } )}

      </div>
      :
      <Loader></Loader>
    }
    </div>



)
}

export default Products