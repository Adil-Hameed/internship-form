import React from 'react'
import { Link } from 'react-router-dom'

export default function Resume() {
    return (
        <div className='container-fluid'>
            <div className='row w-90 justify-content-md-between justify-content-around mx-auto rounded mt-5 '>
                <div className="row w-80 mx-auto text-white">
                    <div className="mx-auto col-lg-10 col-12  px-0 formgray-text text-center">
                        <h3 className='fs-33 fw-bold text-center mb-3 dark-blue-text'>
                            Internship program you are interested in:<span style={{ color: "#2CAAE6" }}> *</span>
                        </h3>
                        <div className='rounded p-2 mt-3 mb-5 w-100 credit-card-input '>
                            <select className='bg-white w-100 agent-select formgray-text'>
                                <option>Select</option>
                                <option>Marketing</option>
                                <option>Business Development</option>
                                <option>Real Estate Research</option>
                                <option>Programming / Coding</option>
                                <option>Data Analysis</option>
                                <option>Business Administration</option>
                            </select>
                        </div>
                    </div>
                    <div className="mx-auto col-lg-10 col-12  px-0 formgray-text text-center">
                        <h3 className='fs-33 fw-bold text-center mb-3 dark-blue-text'>
                            Resume or Personal Profile
                        </h3>
                        <input type="file" id='upload' placeholder='Upload or Choose file' className="rounded p-2 mt-3 mb-5  w-100  formgray-text"></input>
                    </div>
                    <div className="mx-auto col-lg-10 col-12  px-0 formgray-text text-center">
                        <h3 className='fs-22 fw-bold text-center mb-3 dark-blue-text'>
                            Provide a brief description on why do you want to join the program? <span style={{ color: "#2CAAE6" }}> *</span>
                        </h3>
                        <textarea rows="4" type="text" placeholder='Actually....' className="rounded p-2 mt-3 mb-5  w-100 credit-card-input formgray-text"></textarea>
                    </div>
                </div>

                <div className='text-center pb-5'>
                    <Link to="/success">
                        <p className='ms-2 pointer d-inline-block light-green p-3 px-md-5 px-4 fw-semibold dark-blue-text mb-0 fw-normal rounded roboto'>
                            Submit
                        </p>
                    </Link>
                </div>
            </div>

        </div>
    )
}
