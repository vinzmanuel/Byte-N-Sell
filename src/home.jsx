import React from 'react'
import Header from './components/header'
import Hero from './components/hero'
import Category from './components/category'
import Mostsearched from './components/mostsearched'
import Stuff from './components/stuff'
import Footer from './components/footer'

function Home() {
    return (
        <div>
            <Header/>
            <Hero/>
            <Category/>
            <Mostsearched/>
            <Stuff/>
            <Footer/>
        </div>
    
    )
}

export default Home
