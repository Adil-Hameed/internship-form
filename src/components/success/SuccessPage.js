import React from 'react'

export default function SuccessPage() {
    return (

        <>
            <div className='container-fluid  pb-4'>
                <div className='row w-90 justify-content-md-between justify-content-around mx-auto rounded  '>
                    <div className="row w-80 mx-auto text-white">
                        <div className='col-xxl-10  col-12 text-center mx-auto px-0 '>

                            <img src="asset/Group 1000006678.svg" className='img-fluid ms-4' alt='' />

                            <h2 className='fw-bolder dark-blue-text'>
                                Thank you for your interest in Sell2Rent!
                            </h2>

                        </div>

                    </div>
                </div>

            </div>

            <div className='container-fluid dark-blue py-5'>
                <div className='row w-90  justify-content-md-between justify-content-around mx-auto rounded'>
                    <div className="row w-80 mx-auto text-white">
                        <div className='col-xxl-10  col-12 text-center mx-auto px-0 '>
                            <h3 className='fw-semibold fs-33 mb-0 '>
                                <span style={{ color: "#2CAAE6" }}>We appreciate </span>you taking the time to connect with us. Rest assured, your inquiry has been received. Our team will review your information and get back to you shortly.
                            </h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container-fluid py-5'>
                <div className='row w-90  justify-content-md-between justify-content-around mx-auto rounded'>
                    <div className="row w-80 mx-auto text-white">
                        <div className='col-lg-8 col-md-10  col-12 text-center mx-auto px-0 '>
                            <p className='mb-0 fs-24 formgray-text'>
                                We look forward to the opportunity of <span style={{ color: "#2CAAE6" }}>working together!</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
