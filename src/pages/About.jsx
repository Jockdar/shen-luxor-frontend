import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const About = () => {
    return ( <
        div className = 'font-sans pt-16 border-t pb-20' >

        { /* Brand Story Section */ } <
        div className = 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' >
        <
        div className = 'text-center mb-16' >
        <
        h2 className = 'text-3xl sm:text-5xl font-serif text-gray-900 mb-6 tracking-wide' > THE LEGACY OF LUXOR < /h2> <
        div className = 'w-24 h-[1px] bg-[#C5A059] mx-auto' > < /div> <
        /div>

        <
        div className = 'flex flex-col md:flex-row gap-16 items-center' > { /* Image - REPLACE THIS FILE IN YOUR ASSETS FOLDER */ } <
        div className = 'w-full md:w-1/2' >
        <
        img className = 'w-full h-auto object-cover aspect-[4/5] border border-gray-100'
        src = { assets.about_img }
        alt = "Shen Luxor Craftsmanship" / >
        <
        /div>

        { /* Story Text */ } <
        div className = 'w-full md:w-1/2 flex flex-col justify-center gap-8' >
        <
        p className = 'text-gray-600 leading-relaxed text-lg font-light' >
        In the heart of Luxor, where ancient pharaohs once walked and the Nile flows with timeless grace, Shen Luxor was born.We are not just a jewelry brand; we are custodians of a 5, 000 - year - old tradition of goldsmithing. <
        /p> <
        p className = 'text-gray-600 leading-relaxed text-lg font-light' >
        Every curve, every filigree, and every gemstone is selected to whisper stories of the past
        while celebrating the modern elegance of today.Our artisans, trained in the shadows of the temples, breathe life into 21 kt gold, creating heirlooms meant to last an eternity. <
        /p>

        { /* Signature/Quote */ } <
        div className = 'mt-4 border-l-4 border-[#C5A059] pl-6' >
        <
        p className = 'font-serif text-xl italic text-gray-800' > “To wear Shen Luxor is to wear a piece of history.” < /p> <
        /div> <
        /div> <
        /div> <
        /div>

        { /* Values Section */ } <
        div className = 'mt-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' >
        <
        div className = 'text-center py-10' >
        <
        h3 className = 'font-serif text-3xl text-gray-900 uppercase tracking-widest' > Why Choose Us < /h3> <
        /div>

        <
        div className = 'grid grid-cols-1 md:grid-cols-3 gap-10 mt-10' >

        <
        div className = 'border border-gray-200 p-12 hover:border-[#C5A059] transition-all duration-500 text-center group bg-white hover:shadow-lg' >
        <
        div className = 'w-12 h-12 bg-gray-50 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:bg-[#C5A059] transition-colors duration-300' >
        <
        svg className = "w-6 h-6 text-gray-400 group-hover:text-white"
        fill = "none"
        stroke = "currentColor"
        viewBox = "0 0 24 24" > < path strokeLinecap = "round"
        strokeLinejoin = "round"
        strokeWidth = "1.5"
        d = "M5 13l4 4L19 7" > < /path></svg >
        <
        /div> <
        h4 className = 'font-serif text-lg mb-4 text-gray-900' > Authentic Heritage < /h4> <
        p className = 'text-gray-500 text-sm font-light leading-6' >
        Sourced directly from Egyptian artisans, ensuring every piece carries the soul of its origin. <
        /p> <
        /div>

        <
        div className = 'border border-gray-200 p-12 hover:border-[#C5A059] transition-all duration-500 text-center group bg-white hover:shadow-lg' >
        <
        div className = 'w-12 h-12 bg-gray-50 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:bg-[#C5A059] transition-colors duration-300' >
        <
        svg className = "w-6 h-6 text-gray-400 group-hover:text-white"
        fill = "none"
        stroke = "currentColor"
        viewBox = "0 0 24 24" > < path strokeLinecap = "round"
        strokeLinejoin = "round"
        strokeWidth = "1.5"
        d = "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" > < /path></svg >
        <
        /div> <
        h4 className = 'font-serif text-lg mb-4 text-gray-900' > Timeless Design < /h4> <
        p className = 'text-gray-500 text-sm font-light leading-6' >
        We blend ancient motifs with contemporary aesthetics to create jewelry that never fades. <
        /p> <
        /div>

        <
        div className = 'border border-gray-200 p-12 hover:border-[#C5A059] transition-all duration-500 text-center group bg-white hover:shadow-lg' >
        <
        div className = 'w-12 h-12 bg-gray-50 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:bg-[#C5A059] transition-colors duration-300' >
        <
        svg className = "w-6 h-6 text-gray-400 group-hover:text-white"
        fill = "none"
        stroke = "currentColor"
        viewBox = "0 0 24 24" > < path strokeLinecap = "round"
        strokeLinejoin = "round"
        strokeWidth = "1.5"
        d = "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" > < /path></svg >
        <
        /div> <
        h4 className = 'font-serif text-lg mb-4 text-gray-900' > Secure & Global < /h4> <
        p className = 'text-gray-500 text-sm font-light leading-6' >
        Insured worldwide shipping and secure payments, bringing Luxor to your doorstep. <
        /p> <
        /div>

        <
        /div> <
        /div>

        <
        /div>
    )
}

export default About