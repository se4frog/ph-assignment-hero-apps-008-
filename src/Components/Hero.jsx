import React from 'react';
import playstore from '../assets/palystore.png';
import appstore from '../assets/appstore.png';
import hero from '../assets/hero.png'
import { Link } from 'react-router';

const Hero = () => {
    return (
        <div>
            <div className='flex justify-center items-center'>
                <div className='text-center max-w-6xl'>
                    <h1 className='font-extrabold text-7xl mb-4'>We Build <br />
                        <span className='text-transparent
                    bg-clip-text bg-linear-to-r from-[#632EE3] to-[#9F62F2]'>Productive</span> Apps</h1>
                    <p className='text-xl mb-10'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                    <div className='font-semibold text-2xl flex gap-16 justify-center'>
                        <Link to='https://play.google.com/store/games?hl=en' className='flex gap-2 items-center'>
                            <img src={playstore} alt="" /><h2>Google Play</h2></Link>
                        <Link to='https://www.apple.com/app-store/' className='flex gap-2 items-center'>
                            <img src={appstore} alt="" /><h2>App Store</h2></Link>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center mt-10'>
                <img src={hero} alt="" />
            </div>
        </div>
    );
};

export default Hero;