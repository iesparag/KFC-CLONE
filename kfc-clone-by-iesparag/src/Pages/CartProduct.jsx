import { Box, Image, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext/CartContext";


const CartProduct = ({ id, name, images, price, type }) => {
  const { state, dispatch } = useContext(CartContext);

  return (
    <Box m="40px auto" gap={50} display={{base:"block",sm:"block",md:"flex",lg:"flex",xl:"flex"}}     className="checkoutProduct">
      <Image w={{base:"70%",md:"30%"}} className="checkoutProduct__image" src={images} alt="" />

      <Box    className="checkoutProduct__info">
        <Box>
          <b className="checkoutProduct__title">{name}</b>
          <Text className="checkoutProduct__price">
            <small>₹</small>
            <strong>{price}</strong>
          </Text>
          <Text className="checkoutProduct__price">
            <strong>{type}</strong>
          </Text>
        </Box>
        <Box>
          <button
            className="btn_pill"
            onClick={() => dispatch({ type: "REMOVE_FROM_BASKET", id: id })}
          >
            Remove from Cart
          </button>
        </Box>
      </Box>
    </Box>
  );
};

export default CartProduct;
