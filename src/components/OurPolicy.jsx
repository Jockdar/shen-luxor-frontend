import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
    return ( <
        div className = 'flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700' >

        { /* 1. Exchange Policy */ } <
        div className = 'group' >
        <
        div className = 'w-12 h-12 mx-auto mb-5 flex items-center justify-center rounded-full border border-[#C5A059] group-hover:bg-[#C5A059] transition-all duration-300' >
        <
        img src = { assets.exchange_icon }
        className = 'w-6 m-auto transition-filter duration-300'
        alt = "" / >
        <
        /div> <
        p className = 'font-serif font-semibold text-[#1A1A1A]' > Easy Exchange < /p> <
        p className = 'text-gray-400 mt-1' > Complementary sizing & exchange < /p> <
        /div>

        { /* 2. Quality Policy */ } <
        div className = 'group' >
        <
        div className = 'w-12 h-12 mx-auto mb-5 flex items-center justify-center rounded-full border border-[#C5A059] group-hover:bg-[#C5A059] transition-all duration-300' >
        <
        img src = { assets.quality_icon }
        className = 'w-6 m-auto'
        alt = "" / >
        <
        /div> <
        p className = 'font-serif font-semibold text-[#1A1A1A]' > Authentic Heritage < /p> <
        p className = 'text-gray-400 mt-1' > Handcrafted in Egypt < /p> <
        /div>

        { /* 3. Support Policy */ } <
        div className = 'group' >
        <
        div className = 'w-12 h-12 mx-auto mb-5 flex items-center justify-center rounded-full border border-[#C5A059] group-hover:bg-[#C5A059] transition-all duration-300' >
        <
        img src = { assets.support_img }
        className = 'w-6 m-auto'
        alt = "" / >
        <
        /div> <
        p className = 'font-serif font-semibold text-[#1A1A1A]' > Private Concierge < /p> <
        p className = 'text-gray-400 mt-1' > Personal shopping assistance < /p> <
        /div>

        <
        /div>
    )
}

export default OurPolicy