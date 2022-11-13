import { Box, Center, Grid, Heading, Image, Flex } from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import { CartContext } from "../Context/CartContext/CartContext";

import CartProduct from "./CartProduct";
import empty_bucket from "../Assets/images/empty_bucket.gif";
import { NavLink } from "react-router-dom";
import SubTotal from "../Components/SubTotal";

const Cart = () => {
  const { state } = useContext(CartContext);

  useEffect(() => {
    console.log("basket data", state.basket);
  }, []);
  return (
    <Box m="10% 10%">
      <Grid
        display={{
          base: "block",
          sm: "block",
          md: "block",
          lg: "flex",
          xl: "flex",
        }}
        gridTemplateColumns={{ base: "2fr,1fr", xl: "2fr 1fr" }}
        className="checkout"
      >
        <Box m="auto" className="checkout__left">
          {/* <img
          className="checkout__add"
          src="https://images.ctfassets.net/wtodlh47qxpt/Na9oR4t8WKmSjIuy5pg4U/2fef58b44c29bbb4341ed116bac84f44/KFC_Maggi__Banner__1440x396px__2_.jpg?w=988&fit=fill&fm=webp"
          alt=""
        /> */}
          {state.basket.length === 0 ? (
            <Box
             
              m="auto"
              // border="1px solid yellow"
            >
              <Center>Your Shopping Basket is Empty</Center>
              <NavLink to="/menu">
                <Center>
                  <button className="btn_pill">Click me for Order Now</button>
                </Center>
              </NavLink>

              <Center>
                <Image src={empty_bucket} />
              </Center>
            </Box>
          ) : (
            <Box>
              <Heading className="checkout__title">Your Food Cart</Heading>
              {state.basket?.map((item) => (
                <CartProduct
                  id={item.id}
                  name={item.name}
                  images={item.images}
                  price={item.price}
                  type={item.type}
                />
              ))}
            </Box>
          )}
        </Box>
        {state.basket.length > 0 && (
          <Box className="checkout__right">
            <SubTotal />
          </Box>
        )}
      </Grid>
    </Box>
  );
};

export default Cart;
