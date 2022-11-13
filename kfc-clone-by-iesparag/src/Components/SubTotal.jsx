import React, { useContext } from "react";

import CurrencyFormat from "react-currency-format";
// import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "../Context/CartContext/reducer";
import { CartContext } from "../Context/CartContext/CartContext";
import { Box, Heading } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";


const SubTotal = () => {
  const {state,dispatch} = useContext(CartContext)
  
  return (
    <Box position={{lg:"sticky",xl:"sticky"}} top={{lg:"50vh"}}  className="subtotal">
      {/* price */}
      <CurrencyFormat
        renderText={(value) => (
          <>
            <Heading m="10px auto" as="h4" size="md">
              Subtotal ({state.basket.length} items): <strong> {value}</strong>
            </Heading>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift.
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(state.basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
       <hr />

      <NavLink to="/payment"><button className="btn_pill">Proceed to Checkout</button></NavLink>
    </Box>
  );
};

export default SubTotal;
