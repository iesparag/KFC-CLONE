import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import "bootstrap/dist/css/bootstrap.min.css";
// import AuthContextProvider from "./Context/AuthContext/AuthContext";
import CartContextProvider from "./Context/CartContext/CartContext";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./Redux/store";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
    <ChakraProvider>
      <BrowserRouter>
    <ReduxProvider store={store}>

          {/* <AuthContextProvider> */}
        <CartContextProvider>
            <App />
        </CartContextProvider>
          {/* </AuthContextProvider> */}
    </ReduxProvider>

      </BrowserRouter>
    </ChakraProvider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
