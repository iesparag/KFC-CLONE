
import { Box,GridItem, Image, Text,Flex, HStack,Button } from '@chakra-ui/react'
import React, { useContext } from 'react'
import veg from "../Assets/images/veg.svg"
import non_veg from "../Assets/images/non_veg.svg"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Icon_Add_to_Cart from "../Assets/images/Icon_Add_to_Cart.svg"
// import { initialState } from '../Context/CartContext/reducer';
import { CartContext } from '../Context/CartContext/CartContext';




const SingleCard = ({id,images,name,type,price,description}) => {
  

  const {state,dispatch} = useContext(CartContext)
  
  return (
    // <Box   w="200px" h="200px">
      <GridItem   >
         <Box><Image w="100%" borderRadius="4px 4px" h="fit-content" src={images}/></Box>
         <Box  >
          <b  >{name}</b>
          
          <HStack  fontSize="13px"><Flex  m="10px 0" gap={2}>{type==="Veg"?<Image  src={veg} alt={type} />:<Image   src={non_veg} alt={type} />}{type}</Flex></HStack>
          <b margin="5px 0" >₹{price}</b>
          <Text m="5px auto" fontSize="13px">{description}</Text>
          <button onClick={()=> dispatch({type:"ADD_TO_BASKET",item:{images,name,type,price,id}})} className='btn_pill' bg="#e4002b"><HStack><Text>Add to Cart</Text><Image src={Icon_Add_to_Cart} alt="bucket" /></HStack> </button>
          
         </Box>
      </GridItem>
    // </Box>

  )
  }
export default SingleCard