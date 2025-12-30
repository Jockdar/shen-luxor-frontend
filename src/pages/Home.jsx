import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'

const Home = () => {
    return ( <
        div > { /* 1. HERO SECTION (Stays Full Width - Cinematic Look) */ } <
        Hero / >

        { /* 2. MAIN CONTENT (Wrapped in Padding to center it properly) */ } <
        div className = "px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] py-10" >

        <
        LatestCollection / >

        { /* Added spacing so sections breathe */ } <
        div className = "my-16" >
        <
        BestSeller / >
        <
        /div>

        <
        OurPolicy / >
        <
        NewsletterBox / >
        <
        /div> <
        /div>
    )
}

export default Home;