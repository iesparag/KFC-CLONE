import React, { useContext } from "react";

import CurrencyFormat from "react-currency-format";
// import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "../Context/CartContext/reducer";
import { CartContext } from "../Context/CartContext/CartContext";
import { Box, Heading } from "@chakra-ui/react";


const SubTotal = () => {
  const {state,dispatch} = useContext(CartContext)
  
  return (
    <Box  className="subtotal">
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

      <button className="btn_pill">Proceed to Checkout</button>
    </Box>
  );
};

export default SubTotal;
