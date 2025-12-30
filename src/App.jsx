import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Login from './pages/Login';
import PlaceOrder from './pages/PlaceOrder';
import Orders from './pages/Orders';
import Collection from './pages/Collection';
import Policy from './pages/Policy';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
    return (
        /* CHANGE: Removed "px-4 sm:px-[5vw]..." global padding.
          Added "bg-azza-cream" to ensure the whole app has the luxury background.
          Added "w-full overflow-hidden" to prevent horizontal scrollbars.
        */
        <
        div className = "bg-azza-cream min-h-screen w-full overflow-hidden text-[#1A1A1A]" >
        <
        ToastContainer / >

        { /* Navbar is now Full Width (Deep Blue) */ } <
        NavBar / >

        { /* SearchBar needs its own padding wrapper so it doesn't touch edges */ } <
        div className = "px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]" >
        <
        SearchBar / >
        <
        /div>

        { /* Routes are Full Width (Essential for the Hero Section) */ } <
        Routes >
        <
        Route path = "/"
        element = { < Home / > }
        /> <
        Route path = "/collection"
        element = { < Collection / > }
        /> <
        Route path = "/about"
        element = { < About / > }
        /> <
        Route path = "/contact"
        element = { < Contact / > }
        /> <
        Route path = "/product/:productId"
        element = { < Product / > }
        /> <
        Route path = "/cart"
        element = { < Cart / > }
        /> <
        Route path = "/login"
        element = { < Login / > }
        /> <
        Route path = "/place-order"
        element = { < PlaceOrder / > }
        /> <
        Route path = "/orders"
        element = { < Orders / > }
        /> <
        Route path = "/privacy"
        element = { < Policy title="PRIVACY POLICY" / > }
        /> <
        Route path = "/delivery"
        element = { < Policy title="DELIVERY & RETURNS" / > }
        /> <
        /Routes>

        <
        Footer / >
        <
        /div>
    );
};

export default App;