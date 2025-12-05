import axios from "axios";
import { createContext, useState } from "react";

export let cartContext = createContext();

export default function CartContextProvider(props) {
    
    const [cartNumber, setCartNumber] = useState(0); 

    function addProductToCart(productId) {
        
        let headers = {
            token: localStorage.getItem('userToken')
        }
        
        return axios.post(`https://ecommerce.routemisr.com/api/v1/cart`,
            {
                productId: productId
            },
            {
                headers: headers
            }
        ).then((response)=>{
            console.log('response' , response)
            setCartNumber(response.data.numOfCartItems)
            return response})

        .catch((error) => error)
    }
    
    function getProductToCart() {
        
        let headers = {
            token: localStorage.getItem('userToken')
        }
        
        return axios.get(`https://ecommerce.routemisr.com/api/v1/cart`,
            {
                headers: headers 
            }
        ).then((response)=>{
            setCartNumber(response.data.numOfCartItems)
            return response})
        .catch((error) => error) 
    }

    function deleteProductFromCart(productId){
        
        let headers = {
            token: localStorage.getItem('userToken')
        }

        return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
            {
                headers: headers 
            }
        ).then((response)=>{
            setCartNumber(response.data.numOfCartItems)
            return response})

        .catch((error)=>error) 
    }

    
    return <cartContext.Provider value={{addProductToCart , getProductToCart , deleteProductFromCart , cartNumber}}>
        {props.children}
    </cartContext.Provider>
}