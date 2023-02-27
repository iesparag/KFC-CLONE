import React, { useContext, useEffect, useState } from "react";

import CurrencyFormat from "react-currency-format";
// import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "../Context/CartContext/reducer";
import { CartContext } from "../Context/CartContext/CartContext";
import { Box, Heading } from "@chakra-ui/react";
import { NavLink, useNavigate } from "react-router-dom";


const SubTotal = () => {
  const {state,dispatch} = useContext(CartContext)
  const [amount,setAmount] = useState(null)
  const navigate  = useNavigate()
  const totalAmount = state.basket.reduce((acc,currPri)=> acc+ currPri.price,0)
  console.log(totalAmount)
  console.log("basket hai",state.basket)
  useEffect(()=> {},[totalAmount])

  const cartTOPayment = ()=> {
    navigate("/payment", {
      state: {
        totalAmount
    }})
  }

  console.log(amount)
  // localStorage.setItem("subtotal", value)
  return (
    <Box position={{lg:"sticky",xl:"sticky"}} top={{lg:"50vh"}}  className="subtotal">
      {/* price */}
      {/* <CurrencyFormat */}
        {/* renderText={(value) => ( */}
         
          <>
            <Heading m="10px auto" as="h4" size="md">
              Subtotal ({state.basket.length} items): <strong> {totalAmount}</strong>
            </Heading>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift.
            </small>
          </>
        {/* // )}
        // decimalScale={2}
        // value={getBasketTotal(state.basket)}
        // // onChange={()=> setAmount(`${value}`)}
        // displayType={"text"}
        // thousandSeparator={true} */}
        {/* prefix={"₹"} */}
      {/* /> */}
       <hr />

      <button onClick={cartTOPayment} className="btn_pill">Proceed to Checkout</button>
    </Box>
  );
};

export default SubTotal;
