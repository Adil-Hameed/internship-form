import React from 'react'
import PreNavbar from '../components/common/PreNavbar'
import Navbar from '../components/common/Navbar'
import StepBar from '../components/common/StepBar'
import Footer from '../components/common/Footer'
import Academic from '../components/step2/Academic'



export default function Step2() {
    return (
        <>
            <PreNavbar />
            <Navbar />
            <StepBar step2 />
            <Academic />
            <Footer />
        </>
    )
}
