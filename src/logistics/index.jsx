import Header from '@/components/header'
import React from 'react'
import LogisticsProgressStepper from './components/Logistics'
import Footer from '@/components/footer'
import Animation from './components/Animation'

function Logistics() {
    return (
        <div> 
            <Header/>
            <Animation/>
            <LogisticsProgressStepper />
            <Footer/>

            
        </div>
    )
}

export default Logistics