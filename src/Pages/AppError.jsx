import React from 'react';
import appErrorImage from '../assets/App-Error.png'
import { useNavigate } from 'react-router';

const AppError = () => {

   const navigate = useNavigate();


    return (
        <div>
            <div className='max-w-6xl mx-auto'>
                <div className='flex justify-center'>
                    <img src={appErrorImage} alt="" />
                </div>
                <h1 className='text-5xl font-semibold text-[#001931] text-center mt-5'>
                    OPPS!! APP NOT FOUND
                </h1>
                <p className='my-3 text-xl font-normal text-center text-[#627382]'>The App you are requesting is not found on our system. Please try another apps.</p>
                <div className='flex justify-center items-center'>
                    <button onClick={()=>navigate(-1)} className='btn btn-primary pr-5'> &lt;Back</button>
                </div>
            </div>
        </div>
    );
};

export default AppError;