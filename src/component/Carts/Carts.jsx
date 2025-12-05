import React, { useContext, useEffect, useState } from 'react' 
import { cartContext } from "../../context/cartContext"

export default function Carts() {
    let [product,setProduct] = useState(null)
    let {getProductToCart} = useContext(cartContext)

    async function getProduct() {
        let response = await getProductToCart();  
        if (response && response.data && response.data.data) {
            console.log(response.data.data);   
            setProduct(response.data.data);
        } else {
            console.error("Failed to fetch cart data or response is invalid.");
        }
    }

    useEffect( ()=>{
        getProduct()
    } , [] )
    
    return (

        <section className="h-100">
            <div className="container h-100 py-5">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-10">

                        {/* Header */}
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <h3 className="fw-normal mb-0">Shopping Cart</h3>
                            <div>
                                <p className="mb-0">
                                    <span className="text-muted">Sort by:</span>{" "}
                                    <a href="#!" className="text-body">
                                        price <i className="fas fa-angle-down mt-1"></i>
                                    </a>
                                </p>
                            </div>
                        </div>
                        
                        {/* Empty Cart State */}
                        {!product ? (
                            <div className="text-center py-5">
                                <p className='text-muted'>Your cart is empty.</p>
                            </div>
                        ) : (
                            // Mapping over cart items
                            [1, 2].map((_, index) => (
                                <div className="card rounded-3 mb-4" key={index}>
                                    <div className="card-body p-4">
                                        <div className="row d-flex justify-content-between align-items-center">
                                            <div className="col-md-2 col-lg-2 col-xl-2">
                                                <img
                                                    src="https://placehold.co/60x60/808080/ffffff?text=Product"
                                                    className="img-fluid rounded-3"
                                                    alt="Placeholder"
                                                />
                                            </div>
                                            <div className="col-md-3 col-lg-3 col-xl-3">
                                                <p className="lead fw-normal mb-2">Basic T-shirt</p>
                                                <p>
                                                    <span className="text-muted">Size: </span>M{" "}
                                                    <span className="text-muted">Color: </span>Grey
                                                </p>
                                            </div>
                                            <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                                {/* Buttons for quantity */}
                                            </div>
                                            <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                                <h5 className="mb-0">$499.00</h5>
                                            </div>
                                            <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                                <a href="#!" className="text-danger">
                                                    <i className="fas fa-trash fa-lg"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}


                        {/* Discount Code */}
                        <div className="card mb-4">
                            <div className="card-body p-4 d-flex flex-row">
                                <div className="form-outline flex-fill">
                                    <input
                                        type="text"
                                        id="discount-code"
                                        className="form-control form-control-lg"
                                    />
                                    <label className="form-label" htmlFor="discount-code">
                                        Discount code
                                    </label>
                                </div>
                                <button
                                    type="button"
                                    className="btn btn-outline-warning btn-lg ms-3"
                                >
                                    Apply
                                </button>
                            </div>
                        </div>

                        {/* Proceed to Pay */}
                        <div className="card">
                            <div className="card-body">
                                <h5 className='text-end mb-3'>Total Price: {product?.totalCartPrice || '0'} EGP</h5>
                                <button
                                    type="button"
                                    className="btn btn-warning btn-block btn-lg w-100"
                                >
                                    Proceed to Pay
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section> 
    )
}