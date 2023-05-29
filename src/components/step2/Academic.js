import React from 'react'
import { Link } from 'react-router-dom'

export default function Academic() {
    return (
        <div className='container-fluid'>
            <div className='row w-90 justify-content-md-between justify-content-around mx-auto rounded mt-5 '>
                <div className="row w-80 mx-auto text-white">
                    <div className="mx-auto col-lg-10 col-12  px-0 formgray-text text-center">
                        <h3 className='fs-33 fw-bold text-center mb-3 dark-blue-text'>
                            Are you a Graduate or an undergraduate student?
                        </h3>
                        <div className='rounded p-2 mt-3 mb-5 w-100 credit-card-input '>
                            <select className='bg-white w-100 agent-select formgray-text'>
                                <option>Select</option>
                                <option>Graduate student</option>
                                <option>undergraduate student</option>
                            </select>
                        </div>
                    </div>
                    <div className="mx-auto col-lg-10 col-12  px-0 formgray-text text-center">
                        <h3 className='fs-33 fw-bold text-center mb-3 dark-blue-text'>
                            Name of School/University/College
                        </h3>
                        <input type='text' id="" className='rounded p-2 my-3 w-100 credit-card-input dark-blue-text' />
                    </div>
                    <div className="mx-auto col-lg-10 col-12  px-0 formgray-text text-center">
                        <h3 className='fs-33 fw-bold text-center mb-3 dark-blue-text'>
                            Degree (Seeking or obtained)
                        </h3>
                        <div className='rounded p-2 mt-3 mb-5 w-100 credit-card-input '>
                            <select className='bg-white w-100 agent-select formgray-text'>
                                <option>Select</option>
                                <option>Bachelor's Degree</option>
                                <option>Master's Degree</option>
                                <option>Associate's Degree</option>
                                <option>Doctorate Degree</option>
                                <option>Professional Certification</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='text-center pb-5'>
                    <Link to="/">
                        <p className='me-2 pointer d-inline-block border p-3 px-md-5 px-4 fw-semibold dark-blue-text mb-0 fw-normal rounded roboto'>
                            &lt; &lt; Back
                        </p>
                    </Link>
                    <Link to="/step3">
                        <p className='ms-2 pointer d-inline-block light-green p-3 px-md-5 px-4 fw-semibold dark-blue-text mb-0 fw-normal rounded roboto'>
                            Next &gt; &gt;
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    )
}
