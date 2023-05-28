import React from 'react'
import PreNavbar from '../components/common/PreNavbar'
import Navbar from '../components/common/Navbar'
import StepBar from '../components/common/StepBar'
import Footer from '../components/common/Footer'
import Resume from '../components/step3/Resume'

export default function Step3() {
    return (
        <>
            <PreNavbar />
            <Navbar />
            <StepBar step3 />
            <Resume/>
            <Footer />
        </>
    )
}
