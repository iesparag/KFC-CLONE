import { createContext, useReducer } from "react";
import reducer from "../CartContext/reducer"
const initialState = {
    basket: [ {
        "id": 9,
        "quantity": 1,
        "images": "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/L-8000240.jpg?ver=22.01",
        "name": "The Allu Arjun Combo",
        "type": "Non veg",
        "price": 399.05,
        "description": "Enjoy 1pc Hot & Crispy Chicken, 1pc Smoky Red, Reg Popcorn, Spicy Mix Fries & a Dip",
        "cate": "hotDeals"
      },
      {
        "id": 10,
        "quantity": 1,
        "images": "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/L-8000078.jpg?ver=22.01",
        "name": "5+5 Bucket Offer",
        "type": "Non veg",
        "price": 619.05,
        "description": "Save 15% on special combo of 5pc Hot & Crispy Chicken + 5 Peri Peri Strips",
        "cate": "hotDeals"
      },
      {
        "id": 11,
        "quantity": 1,
        "images": "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/L-8000169.jpg?ver=22.01",
        "name": "Peri Peri 10 Leg piece + 4 dips",
        "type": "Non veg",
        "price": 868.57,
        "description": "Save 22% on this Leg Piece Bucket with 10 KFC Peri Peri Leg Piece with 4 dips",
        "cate": "hotDeals"
      },
      {
        "id": 12,
        "quantity": 1,
        "images": "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/L-8000155.jpg?ver=22.01",
        "name": "Mega Feast",
        "type": "Non veg",
        "price": 635.24,
        "description": "Relish a big size feast with KFC favorites & new launches- 2 pc H&C,2 pc Smoky Grilled, 1 buttered bun, 1gravy, med.fries & pepsi",
        "cate": "hotDeals"
      }]
};

export const CartContext = createContext()

const CartContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(reducer,initialState)
    
    // console.log(state.basket)
   return (
    <CartContext.Provider value={{initialState,state,dispatch}} >{children}</CartContext.Provider>
   )
}

export default CartContextProvider;