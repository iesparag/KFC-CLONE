import React, { useContext, useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import vfc_logo from "../Assets/images/vfc_logo.png";
import { useNavigate } from "react-router-dom";
import { Text, useToast } from '@chakra-ui/react'
import {
  Box,
  Center,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import loader_gif from "../Assets/images/loader_gif.gif";
import { EmailIcon } from "@chakra-ui/icons";
import { signup } from './../Redux/SignupRedux/Signup.Actions';
import { useDispatch } from "react-redux";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast()
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch()
  const navigate = useNavigate();

  ////////////////////////////////////////////////

  ///////////////////////////////////////////
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const payload = {
      email,
      password,
    };
    dispatch(signup({ payload })).then((res) => {
        console.log(res);
        setLoading(false);
        if (res === "user exist please login") {
          // alert("user Exist");
          toast({
            title: "Account Exist",
            description: "Please Login In",
            status: "info",
            duration: 4000,
            position: "top-right",
            isClosable: true,
          });
    
          return navigate("/login");
        } else if (res === "user registered") {
          // alert("user signed up successfully");
        setLoading(false);

          toast({
            title: "Account created.",
            description: "We've created your account for you.",
            status: "success",
            duration: 4000,
            position: "top-right",
            isClosable: true,
          });
    
          return navigate("/login");
        }
    
      
      })
    
   
  };

  if (loading) {
    return (
      <Center>
        <Image z-index="5" src={loader_gif} />
      </Center>
    );
  }

  return (
    <Center>
      <Box m=" 50px auto" p="auto 10%" w={{base:"80%",sm:"80%",md:"70%",lg:"40%"}} >
      <Heading m={{lg:"20px auto"}}>Sign Up</Heading>
      <Box>
        <form onSubmit={handleSubmit}  >
       
          <Heading m="20px auto 10px" fontSize="18px" fontWeight="600" letterSpacing="1px" color="#e4002b">Email address</Heading>
          <Input focusBorderColor = "#e4002b" color="black"  type="text" value={email} onChange={e => setEmail(e.target.value)} />
          
          <Heading m="20px auto 10px" color="#e4002b" fontSize="18px" fontWeight="600" letterSpacing="1px">Password</Heading>
          <Input  focusBorderColor = "#e4002b" color="black" type="password" value={password}
             onChange={(e) => setPassword(e.target.value)} />
          
          <Input letterSpacing="1px" fontWeight="600" color="#fff" bg="#e4002b"  type="submit" mt="30px" />
       
        </form>
        <Text mt="20px">Already have an account ? <Link to="/login" style={{color:"#e4002b"}}>Login</Link></Text>
      </Box>
    </Box>
    
    </Center>




    // <div className="login">
    //   <Link to="/">
    //     <img className="login__logo" src={vfc_logo} />
    //   </Link>
    //   <div className="login__container">
    //     <h1>Sign in</h1>
    //     <form onSubmit={handleSubmit}>
    //       <h5>E-mail</h5>
    //       <Input type="email" value={email} onChange={e => setEmail(e.target.value)}/>
          

    //       <h5>Password</h5>
    //       <Input
    //         type="password"
    //         value={password}
    //         onChange={(e) => setPassword(e.target.value)}
    //       />

    //       <button className="login__signInButton" type="submit">
    //         Sign in
    //       </button>
    //     </form>
    //     <p>
    //       By continuing, you agree to Vfc's Conditions of Use and Privacy
    //       Notice.
    //     </p>
    //   </div>
    // </div>

// {/* <button className="login__registerButton"  >Create your Vfc Account</button> */}

   
  );
};

export default Signup;



 