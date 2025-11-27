import React from 'react';
import errorImage from '../assets/error-404.png'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { useNavigate } from 'react-router';

const Error = () => {

    const navigate = useNavigate();

    return (
        <div>
            
            <div className='max-w-6xl mx-auto my-10'>
                <div className='flex justify-center'>
                    <img src={errorImage} alt="" />
                </div>
                <h1 className='text-5xl font-semibold text-[#001931] text-center mt-5'>
                    Oops, page not found!
                </h1>
                <p className='mt-3 text-xl font-normal text-center text-[#627382]'>The page you are looking for is not available.</p>
                <div className='flex justify-center items-center mt-3'>
                    <button onClick={()=>navigate(-1)} className='btn btn-primary pr-5'> &lt;Back</button>
                </div>
            </div>
           
        </div>
    );
};

export default Error;