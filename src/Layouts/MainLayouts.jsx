import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet, useNavigation } from 'react-router';
import Spinner from '../Components/Spinner';


const MainLayouts = () => {

    const navigation = useNavigation();

    const isLoading = navigation.state === "loading";

    return (
        <div className='flex flex-col min-h-screen'>

            <div className='lg:px-5'><Navbar></Navbar></div>
            <div className='flex-1 mx-auto w-full py-4 md:py-8 lg:py-12'>
                {isLoading && <Spinner />}
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayouts;