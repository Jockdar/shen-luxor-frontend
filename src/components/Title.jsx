import React from 'react'

const Title = ({ text1, text2 }) => {
    return ( <
        div className = 'inline-flex gap-2 items-center mb-3' > { /* The Text: Serif Font + Uppercase */ } <
        p className = 'text-gray-500' > { text1 } < span className = 'text-gray-700 font-serif font-medium lg:text-2xl' > { text2 } < /span> <
        /p>

        { /* The Line: Changed to Azza Gold (#C5A059) */ } <
        p className = 'w-8 sm:w-12 h-[1px] sm:h-[2px] bg-[#C5A059]' > < /p> <
        /div>
    )
}

export default Title