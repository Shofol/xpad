import React from 'react'
import About from '../components/About/About'
import Contact from '../components/Contact/Contact'
import Features from '../components/Features/Features'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Tiers from '../components/Tiers/Tiers'
import Tokenomics from '../components/Tokenomics/Tokenomics'

const Home = () => {
    return (
        <div>
            <Header />
            <About />
            <Tokenomics />
            <Tiers />
            <Features />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home
