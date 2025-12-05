import axios from "axios";
import { createContext } from "react";

export let cartContext = createContext();

export default function CartContextProvider(props) {
    
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
        ).then((response) => response)
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
        ).then((response) => response)
        .catch((error) => error) 
    }
    
    return <cartContext.Provider value={{ addProductToCart, getProductToCart }}>
        {props.children}
    </cartContext.Provider>
}