import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Error from './Error';

const ErrorPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Error></Error>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;