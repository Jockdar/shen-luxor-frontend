import React from 'react'

const NewsletterBox = () => {

    const onSubmitHandler = (event) => {
        event.preventDefault(); // Prevents page reload
    }

    return ( <
        div className = 'text-center my-20' > { /* Luxury Heading */ } <
        p className = 'text-2xl font-serif font-medium text-gray-800' >
        Join the Inner Circle <
        /p>

        { /* Refined Subtext */ } <
        p className = 'text-gray-400 mt-3 font-sans tracking-wide text-sm' >
        Be the first to secure our limited edition masterpieces and exclusive heritage stories. <
        /p>

        { /* Minimalist Input Form */ } <
        form onSubmit = { onSubmitHandler }
        className = 'w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border-b border-[#C5A059] pb-2 pl-3' >
        <
        input className = 'w-full sm:flex-1 outline-none text-gray-600 bg-transparent placeholder-gray-400'
        type = "email"
        placeholder = "Enter your email address"
        required /
        >
        <
        button type = 'submit'
        className = 'bg-[#1A1A1A] text-white text-xs px-8 py-3 uppercase tracking-widest hover:bg-[#C5A059] transition-colors duration-300' >
        Subscribe <
        /button> <
        /form> <
        /div>
    )
}

export default NewsletterBox