import Header from '@/components/header'
import React, { useEffect, useState } from 'react'
import StepperCheckout from '../components/Stepper'
import Footer from '@/components/footer'
import { db } from './../../../configs';
import { Listing } from './../../../configs/schema';
import { eq } from 'drizzle-orm';
import service from '@/shared/service';
import { useParams } from 'react-router-dom';

function Checkout() {

    

  return (
    <div>
        <Header/>
        <StepperCheckout/>
        <Footer/>
    </div>
  )
}

export default Checkout