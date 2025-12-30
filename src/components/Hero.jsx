import React from 'react';

const Hero = () => {
    return (
        /* REMOVED borders and flex-row. This is now a full-width background image container */
        <
        div className = "relative w-full h-[600px] sm:h-[700px] bg-cover bg-center overflow-hidden"
        style = {
            { backgroundImage: "url('https://images.unsplash.com/photo-1626784215021-2e39ccf971cd?q=80&w=2070&auto=format&fit=crop')" } } >

        { /* Dark Overlay so text pops */ } <
        div className = "absolute inset-0 bg-black/30" > < /div>

        { /* Text Container - Centered */ } <
        div className = "absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4" >
        <
        div className = "flex items-center gap-2 mb-4 opacity-0 animate-fadeIn" >
        <
        p className = "w-12 h-[1px] bg-[#C5A059]" > < /p> <
        p className = "font-sans text-xs sm:text-sm tracking-[0.3em] uppercase text-[#C5A059]" > The Heritage Edit < /p> <
        p className = "w-12 h-[1px] bg-[#C5A059]" > < /p> <
        /div>

        <
        h1 className = "font-serif text-4xl sm:text-6xl lg:text-7xl leading-tight mb-6 opacity-0 animate-slideUp" >
        ETERNAL < br / > PROTECTION <
        /h1>

        <
        div className = "flex items-center gap-2 mt-4 cursor-pointer hover:scale-105 transition-transform opacity-0 animate-slideUp delay-100" >
        <
        p className = "font-semibold text-sm uppercase tracking-widest text-white border-b border-[#C5A059] pb-1" > Explore Collection < /p> <
        /div> <
        /div> <
        /div>
    );
};

export default Hero;