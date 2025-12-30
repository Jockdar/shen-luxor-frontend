import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
    return ( <
        div className = 'md:mx-10' >
        <
        div className = 'flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm' >

        { /* --- LEFT COLUMN: BRAND STORY --- */ } <
        div > { /* The Logo (Matching the Navbar) */ } <
        div className = "flex flex-col items-start leading-none mb-5" >
        <
        h1 className = "text-2xl font-serif font-bold tracking-widest text-[#1A1A1A] uppercase" >
        SHEN LUXOR <
        /h1> <
        span className = "text-[10px] tracking-[0.4em] text-[#C5A059] mt-1 uppercase" >
        Timeless Jewellery <
        /span> <
        /div>

        { /* YOUR NEW TEXT */ } <
        p className = 'w-full md:w-2/3 text-gray-600 leading-relaxed font-sans' >
        SHEN LUXOR is a luxury jewelry house born from a passion
        for timeless beauty and refined craftsmanship.The name SHEN LUXOR was carefully chosen to reflect the soul of our brand. <
        /p> <
        /div>

        { /* --- MIDDLE COLUMN: LINKS --- */ } <
        div >
        <
        p className = 'text-xl font-serif font-medium mb-5 text-[#1A1A1A]' > COMPANY < /p> <
        ul className = 'flex flex-col gap-1 text-gray-600 cursor-pointer' >
        <
        li className = "hover:text-[#C5A059] transition-colors" > Home < /li> <
        li className = "hover:text-[#C5A059] transition-colors" > About us < /li> <
        li className = "hover:text-[#C5A059] transition-colors" > Delivery < /li> <
        li className = "hover:text-[#C5A059] transition-colors" > Privacy Policy < /li> <
        /ul> <
        /div>

        { /* --- RIGHT COLUMN: CONTACT --- */ } <
        div >
        <
        p className = 'text-xl font-serif font-medium mb-5 text-[#1A1A1A]' > GET IN TOUCH < /p> <
        ul className = 'flex flex-col gap-1 text-gray-600' >
        <
        li > +212 - 600 - 000 - 000 < /li> <
        li > contact @shenluxor.com < /li> <
        /ul> <
        /div>

        <
        /div>

        { /* --- BOTTOM COPYRIGHT --- */ } <
        div >
        <
        hr className = 'border-[#C5A059] opacity-30' / >
        <
        p className = 'py-5 text-sm text-center text-gray-500' > ©2025 Shen Luxor.All Rights Reserved. <
        /p> <
        /div> <
        /div>
    );
};

export default Footer;