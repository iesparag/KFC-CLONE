import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import vfc_logo from "../Assets/images/vfc_logo.png"


const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const signIn = (e) => {
    e.preventDefault();

    // some fancy firebase login shit 

  }

  const register = (e) => {
    e.preventDefault();
   
    // do some firebase register

  }

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src={vfc_logo}
        />
      </Link>
      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)}/>

          <h5>Password</h5>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

          <button className="login__signInButton" onClick={signIn} type="submit" >Sign in</button>
         
        </form>
        <p>By continuing, you agree to Vfc's Conditions of Use and Privacy Notice.</p>
        <button className="login__registerButton" onClick={register} >Create your Vfc Account</button>
      </div>
    </div>
  );
};

export default Login;
