import axios from 'axios';
import React, { useEffect, useState , useContext} from 'react'
import { useParams } from 'react-router-dom'
import {cartContext} from '../../context/cartContext'
import toast from "react-hot-toast"
export default function ProductDetails() {
  let {addProductToCart} = useContext(cartContext); 
  let {id} = useParams();
  const [details, setDetails] = useState(null) 
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

  function getProductDetails(){
    axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`) 
    .then( ({data})=>{
      console.log(data.data);
      setDetails(data.data);
    } )
    .catch( ()=>{} )
  }

  useEffect( ()=>{
    getProductDetails();
  } , [])


  return (
    <div className="container my-5 min-vh-100 d-flex align-items-center justify-content-center">
      <div className="row w-100 justify-content-center">
        <div className="col-lg-10 col-xl-8">
          <div className="card shadow border-0 p-4" style={{backgroundColor: '#f8f9fa'}}>
            <div className="row g-4">
              <div className="col-md-6 text-center">
                <img 
                  src={details?.imageCover} 
                  alt={details?.title} 
                  className="img-fluid rounded shadow" 
                  style={{maxHeight: '400px', objectFit: 'contain'}}
                />
              </div>

              <div className="col-md-6 d-flex flex-column justify-content-center">
                <h1 className="fw-bold mb-3 text-center text-md-start">{details?.title}</h1>
                <p className="text-muted mb-4" style={{textAlign: 'justify'}}>{details?.description}</p>
                <p className="badge bg-info text-dark fs-6 px-3 py-2 mb-3 w-fit">Category: {details?.category?.name}</p>
                
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <span className="h4 fw-bold text-primary">{details?.price} EGP</span>
                  <span className="h5">
                    {details?.ratingsQuantity} <i className="fas fa-star text-warning"></i>
                  </span>
                </div>
                
                <button onClick= {()=>{addProductItem(details?.id)}} className='btn bg-info text-white p-2 m-2 w-100'>Add To Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}