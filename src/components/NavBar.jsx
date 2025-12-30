import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const NavBar = () => {
        const [visible, setVisible] = useState(false);
        const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);

        const logout = () => {
            navigate('/login')
            localStorage.removeItem('token')
            setToken('')
            setCartItems({})
        }

        return (
            /* MAIN CONTAINER: Changed to Deep Blue to match Azza Fahmy */
            <
            div className = "bg-azza-blue w-full" >

            { /* --- ROW 1: LOGO & ICONS --- */ } <
            div className = "flex items-center justify-between py-6 px-4 sm:px-10 border-b border-white/10" >

            { /* Left Spacer (to balance the layout) */ } <
            div className = "hidden sm:block w-20" > < /div>

            { /* CENTER: LOGO */ } <
            Link to = '/'
            className = "flex flex-col items-center leading-none cursor-pointer text-center" >
            <
            h1 className = "text-2xl sm:text-3xl font-serif font-bold tracking-widest text-[#C5A059] uppercase" >
            SHEN LUXOR <
            /h1> { /* Optional: Add Arabic or Subtext here if desired */ } <
            span className = "text-[10px] tracking-[0.4em] text-white/80 mt-1 uppercase" >
            Timeless Jewellery <
            /span> <
            /Link>

            { /* RIGHT: ICONS (White/Gold) */ } <
            div className = "flex items-center gap-6" >
            <
            img onClick = {
                () => setShowSearch(true) }
            src = { assets.search_icon }
            className = "w-5 cursor-pointer invert opacity-80 hover:opacity-100"
            alt = "Search" / >

            <
            div className = "group relative" >
            <
            img onClick = {
                () => token ? null : navigate('/login') }
            className = "w-5 cursor-pointer invert opacity-80 hover:opacity-100"
            src = { assets.profile_icon }
            alt = "Profile" / > {
                token && < div className = "hidden group-hover:block absolute right-0 pt-4 bg-white shadow-md rounded z-50" >
                <
                div className = "flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded" >
                <
                p className = "cursor-pointer hover:text-black" > My Profile < /p> <
                p onClick = {
                    () => navigate('/orders') }
                className = "cursor-pointer hover:text-black" > Orders < /p> <
                p onClick = { logout }
                className = "cursor-pointer hover:text-black" > Logout < /p> <
                /div> <
                /div>} <
                /div>

                <
                Link to = "/cart"
                className = "relative" >
                <
                img src = { assets.cart_icon }
                className = "w-5 min-w-5 invert opacity-80 hover:opacity-100"
                alt = "Cart" / >
                <
                p className = "absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-[#C5A059] text-white aspect-square rounded-full text-[8px]" > { getCartCount() } <
                /p> <
                /Link> <
                img onClick = {
                    () => setVisible(true) }
                src = { assets.menu_icon }
                className = 'w-5 cursor-pointer sm:hidden invert'
                alt = "" / >
                <
                /div> <
                /div>

                { /* --- ROW 2: NAVIGATION LINKS (Center, Gold Text) --- */ } <
                div className = "hidden sm:flex justify-center gap-12 py-4 text-xs font-sans tracking-[0.2em] text-white/80 uppercase" >
                <
                NavLink to = "/"
                className = {
                    ({ isActive }) => isActive ? "text-[#C5A059]" : "hover:text-[#C5A059] transition-colors" } >
                Home <
                /NavLink> <
                NavLink to = "/collection"
                className = {
                    ({ isActive }) => isActive ? "text-[#C5A059]" : "hover:text-[#C5A059] transition-colors" } >
                Jewellery <
                /NavLink> <
                NavLink to = "/about"
                className = {
                    ({ isActive }) => isActive ? "text-[#C5A059]" : "hover:text-[#C5A059] transition-colors" } >
                High Jewellery <
                /NavLink> <
                NavLink to = "/contact"
                className = {
                    ({ isActive }) => isActive ? "text-[#C5A059]" : "hover:text-[#C5A059] transition-colors" } >
                Gifts <
                /NavLink> <
                NavLink to = "/about"
                className = {
                    ({ isActive }) => isActive ? "text-[#C5A059]" : "hover:text-[#C5A059] transition-colors" } >
                World of Shen <
                /NavLink> <
                /div>

                { /* --- MOBILE SIDEBAR (Keep existing logic) --- */ } <
                div className = { `absolute top-0 right-0 bottom-0 overflow-hidden bg-white z-50 transition-all ${visible ? 'w-full' : 'w-0'}` } >
                <
                div className = "flex flex-col text-gray-600" >
                <
                div onClick = {
                    () => setVisible(false) }
                className = "flex items-center gap-4 p-3 cursor-pointer" >
                <
                img src = { assets.dropdown_icon }
                className = "h-4 rotate-180"
                alt = "" / >
                <
                p > Back < /p> <
                /div> <
                NavLink onClick = {
                    () => setVisible(false) }
                className = 'py-2 pl-6 border-b'
                to = "/" > HOME < /NavLink> <
                NavLink onClick = {
                    () => setVisible(false) }
                className = 'py-2 pl-6 border-b'
                to = "/collection" > JEWELLERY < /NavLink> <
                NavLink onClick = {
                    () => setVisible(false) }
                className = 'py-2 pl-6 border-b'
                to = "/about" > HIGH JEWELLERY < /NavLink> <
                /div> <
                /div> <
                /div>
            );
        };

        export default NavBar;