import React from "react";
import { Routes, Route } from "react-router-dom";
import Menu from "../Pages/Menu";
import Cart from "../Pages/Cart";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Deal from "../Pages/Deal";
import HotDeals from "../menu/HotDeals";
import ChickenBucket from "../menu/ChickenBucket";
import HotLaunches from "../menu/HotLaunches";
import BoxMeals from "../menu/BoxMeals";
import Burgers from "../menu/Burgers";
import BiryaniBuckets from "../menu/BiryaniBuckets";
import Snack from "../menu/Snack";
import BeveragesAndDesserts from "../menu/BeveragesAndDesserts";
import PrivateRoute from "../Components/PrivateRoute";
import Payment from "../Pages/Payment";
import SearchPage from "../Pages/SearchPage";
import Signup from './../Pages/Signup';


const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/menu" element={<Menu />}></Route>
      <Route path="/deals" element={<Deal />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/searchpage" element={<SearchPage/>}></Route>
      <Route
        path="/payment"
        element={
          <PrivateRoute>
            <Payment />
           </PrivateRoute>
        }
      ></Route>
      <Route
        path="/cart"
        element={
          <PrivateRoute>
            <Cart />
           </PrivateRoute>
        }
      ></Route>
   

      
      <Route path="/menu/hotDeals" element={<HotDeals />}></Route>
      <Route path="/menu/chickenBucket" element={<ChickenBucket />}></Route>
      <Route path="/menu/hotLaunches" element={<HotLaunches />}></Route>
      <Route path="/menu/boxMeals" element={<BoxMeals />}></Route>
      <Route path="/menu/burgers" element={<Burgers />}></Route>
      <Route path="/menu/biryaniBuckets" element={<BiryaniBuckets />}></Route>
      <Route path="/menu/snack" element={<Snack />}></Route>
      <Route
        path="/menu/beveragesAndDesserts"
        element={<BeveragesAndDesserts />}
      ></Route>
    </Routes>
  );
};

export default AllRoutes;
