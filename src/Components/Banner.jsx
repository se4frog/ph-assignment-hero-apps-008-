import React from 'react';

const Banner = () => {
    return (
        <div>
          <div className='
          text-center bg-linear-to-r from-[#632EE3] to-[#9F62F2] p-20'>
                <h1 className='font-bold text-5xl mb-10'>Trusted By Millions, Built For You</h1>
                <div className='flex flex-col md:flex-row gap-10 lg:gap-40 xl:gap-60 justify-center'>
                    <div>
                        <p>Total Downloads</p>
                        <h1 className='font-extrabold text-7xl my-2'>29.6M</h1>
                        <p>21% More Than Last Month</p>
                    </div>
                    <div>
                        <p>Total Reviews</p>
                        <h1 className='font-extrabold text-7xl my-2'>906K</h1>
                        <p>46% More Than Last Month</p>

                    </div>
                    <div>
                        <p>Active Apps</p>
                        <h1 className='font-extrabold text-7xl my-2'>132+</h1>
                        <p>31 More Will Launch</p>
                    </div>
                </div>
            </div>  
        </div>
    );
};

export default Banner;