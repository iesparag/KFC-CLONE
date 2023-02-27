import {
  Box,
  Center,
  Button,
  Image,
  Heading,
  Stack,
  StackDivider,
  Radio,
  Flex,
  RadioGroup,
} from "@chakra-ui/react";


import React, { useContext, useEffect, useState } from "react";
import vfc_logo from "../Assets/images/vfc_logo.png";
import SubTotal from "../Components/SubTotal";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useToast } from '@chakra-ui/react'
import { CartContext } from './../Context/CartContext/CartContext';
import axios from "axios";



const Payment = () => {
 const { state} = useLocation();
 
 const toast = useToast()
const {  dispatch } = useContext(CartContext);
const [payMtd,setPayMtd] = useState("online")
const navigate = useNavigate()
const [money,setMoney] = useState(null)

useEffect(()=> {
  setMoney(state.totalAmount)
},[])

console.log("total",state.totalAmount)

console.log(payMtd)

const handlePaymentCOD =  () => {
 
  dispatch({type:"resetCart"})
  navigate("/")
  toast({
    position: 'bottom',
    status: 'success',
    isClosable: true,
    duration: 9000,
    render: () => (
      <Box p="10px 20px" color='white' bg='#e4002b' borderRadius="10px">
        <b>Order Successfull</b><br />
        <b>we will serve you within 15 minutes</b>
      </Box>
    ),
  })
 

}


function loadScript(src) {
  return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
          resolve(true);
      };
      script.onerror = () => {
          resolve(false);
      };
      document.body.appendChild(script);
  });
}

async function displayRazorpay() {
  const res = await loadScript(
      `https://checkout.razorpay.com/v1/checkout.js`
  );
   console.log(res)
  if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
  }

  // creating a new order
  const result = await axios.post("https://busy-jade-pangolin-sock.cyclic.app/payment/orders",{amount:money});

  if (!result) {
      alert("Server error. Are you online?");
      return;
  }

  // Getting the order details back
  const { amount, id: order_id, currency } = result.data;

  const options = {
      key: "rzp_test_8DHk41YB81t2Ja", // Enter the Key ID generated from the Dashboard
      amount: amount.toString(),
      currency: currency,
      name: "VFC PAYMENT",
      image:  vfc_logo ,
      order_id: order_id,
      handler: async function (response) {
          const data = {
              orderCreationId: order_id,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpayOrderId: response.razorpay_order_id,
              razorpaySignature: response.razorpay_signature,
          };

          const result = await axios.post("https://busy-jade-pangolin-sock.cyclic.app/payment/success");
          console.log(result)
          // alert(result.data.msg);

         if(result.data.msg ==="success"){

           toast({
             title: "Payment successfull.",
             description: "We've Placed Your Order.",
             status: "success",
             position: "top",
             duration: 5000,
             isClosable: true,
            });
            //  dispatch({type:"resetCart"})
            toast({
              title: "Delivery Details",
              description: "we will serve your order with in 30 minutes",
              status: "success",
              position: "top",
              duration: 5000,
              isClosable: true,
             });
            
            dispatch({type:"resetCart"})
            navigate("/");
          }
  
         
        
      },
      prefill: {
          name: "parag jain",
          email: "iesparagjain@gmail.com",
          contact: "9770525851",
      },
      notes: {
          address: "VFC Bangalore",
      },
      theme: {
          color: "#61dafb",
      },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();


}

// console.log(payMtd);

  return (
    <Box  margin="30px auto">
      {/* <SubTotal/> */}
      <Flex
      
        m="auto"
        boxShadow="base"
        justifyContent="center"
       
        gap={10}
        direction="column"
        p={{base:"5%"}} w={{base:"90%",md:"50%"}}
      >
        <Heading size={{sm:"sm" ,md:"md"}} color="#e4002b" >Select Your Payment Method..</Heading>
        <RadioGroup  >
          {/* <Radio onClick={() => {
            setPayMtd("online");
          }} checked={payMtd=="online"} color="#e4002b" m="20px auto" name="payMtd" value="online1">
            <Flex alignItems="center" gap={4}>
            <Image
                w="10%"
                src="https://cdn-icons-png.flaticon.com/512/3037/3037247.png"
              />
              <Image
                w="10%"
                src="https://cdn-icons-png.flaticon.com/512/2922/2922888.png"
              />
              <Image
                w="10%"
                src="https://cdn-icons-png.flaticon.com/512/177/177025.png"
              />
              <Image
                w="10%"
                src="https://cdn-icons-png.flaticon.com/512/147/147258.png"
              />
              <Image
                w="10%"
                src="https://cdn-icons-png.flaticon.com/512/24/24695.png"
              />
            </Flex>
          </Radio>
          <hr /> */}
          <Radio onClick={() => {
            setPayMtd("online");
          }} checked={payMtd=="online"} m="20px auto" name="payMtd" value="online">
            <Flex onClick={() => {
            setPayMtd("online");
          }} alignItems="center" gap={4}>
              <Image
                w="10%"
                src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20data-name%3D%22Layer%201%22%20viewBox%3D%220%200%2064%2064%22%3E%3Cpath%20fill%3D%22%23fe7a09%22%20d%3D%22M26.26%2045.867a13.116%2013.116%200%200%200-2.483%202.115c-3.234%202.936-6.439%205.904-9.663%208.85a1.042%201.042%200%200%201-.987.518L28.1%205.028l6.455%2012.138c2.225%204.28%204.409%208.581%206.703%2012.823a1.593%201.593%200%200%201-.385%202.37c-4.851%204.375-9.635%208.826-14.442%2013.25a.233.233%200%200%200-.19.275Z%22%2F%3E%3Cpath%20fill%3D%22%23028c3c%22%20d%3D%22M26.432%2045.61c4.807-4.425%209.59-8.876%2014.442-13.252a1.593%201.593%200%200%200%20.385-2.37c-2.294-4.241-4.478-8.542-6.703-12.822l2.757-9.37.27-.918a.679.679%200%200%201%20.51.591q6.47%2012.338%2012.936%2024.679a.953.953%200%200%201-.183%201.41q-13.81%2012.61-27.58%2025.264a.793.793%200%200%201-.6.217c.307-1.09.61-2.181.921-3.27.858-3%201.725-5.996%202.57-8.998a1.024%201.024%200%200%200%20.103-.904l-.018.017c.25.037.174-.15.19-.274Z%22%2F%3E%3Cpath%20fill%3D%22%23fefefe%22%20d%3D%22M26.432%2045.61c-.016.124.06.311-.19.274a.233.233%200%200%201%20.19-.274Z%22%2F%3E%3C%2Fsvg%3E"
              />
              <Image
                w="10%"
                src="https://cdn-icons-png.flaticon.com/512/6124/6124998.png"
              />
              <Image
                w="10%"
                h="10%"
                src="https://pixlok.com/wp-content/uploads/2021/05/PhonePe-Icons-PNG-Image-300x300.jpg"
              />
            </Flex>
          </Radio>
          <hr />
          {/* <Radio onClick={() => {
            setPayMtd("online");
          }}  checked={payMtd=="online"} m="20px auto" name="payMtd" value="online3">
            <Flex gap={4}>
              <Image
                w="10%"
                src="https://cdn-icons-png.flaticon.com/512/8756/8756558.png"
              />
              <Image
                w="10%"
                src="https://cdn-icons-png.flaticon.com/512/196/196578.png"
              />
              <Image
                w="10%"
                src="https://cdn-icons-png.flaticon.com/512/5790/5790705.png"
              />
              <Image
                w="10%"
                src="https://cdn-icons-png.flaticon.com/512/3262/3262303.png"
              />
            </Flex>
          </Radio>
          <hr /> */}
          <Radio onClick={() => {
            setPayMtd("offline");
          }}  checked={payMtd=="offline"} m="20px auto" name="payMtd" value="offline">
            <Flex onClick={() => {
            setPayMtd("offline");
          }} gap={4}>
              <Heading  size="md">Cash on Delivery</Heading>
            </Flex>
          </Radio>
          <hr />

       <>
      </>
        </RadioGroup>
        <Box w="100%"  className="btn_pill">{payMtd==="online"?<button onClick={displayRazorpay}>Pay Your Bill Online</button> : <button onClick={handlePaymentCOD}>Pay COD</button> }</Box>
      </Flex>
    </Box>
  );
};

export default Payment;



