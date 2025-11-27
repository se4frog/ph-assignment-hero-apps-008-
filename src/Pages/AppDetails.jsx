import React, { useState } from 'react';
import { useParams } from 'react-router';
import useAppsFunc from '../Hooks/useAppsFunc';
import downloadIcon from '../assets/icon-downloads.png';
import ratingsIcon from '../assets/icon-ratings.png'
import reviewsIcon from '../assets/icon-review.png'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ToastContainer, toast } from 'react-toastify';
import { loadLocalApps, updateLocalApps } from '../utils/localStorage';




const AppDetails = () => {

    const { id } = useParams();

    const { apps, loading } = useAppsFunc();
    const app = apps.find(a => String(a.id) === id)

    const localApps = loadLocalApps()
    const isInstalled = localApps.some(app=> String(app.id) === id)

    const [btnState, setBtnState] = useState(isInstalled)

    
    if (loading) return <p>Loading...</p>
    
    const { image, title, reviews, downloads, description, ratings, ratingAvg, companyName, size } = app;
    
    

    const handleBtn = () => {
        updateLocalApps(app);
        toast("App Installed!");   
        setBtnState(true)
    }


    


    const formatter = new Intl.NumberFormat('en-US', {
        notation: "compact",
        compactDisplay: "short"
    });
    
    const formatNumber = num => formatter.format(num);
    
    const rRatings = [...ratings].reverse();




    return (
        <div>
            <div className='max-w-6xl mx-auto py-10 px-auto lg:px-40'>
                <div className="card flex md:flex-row  bg-base-100 shadow-sm">
                    <div>
                        <figure className='p-0 md:p-10'>
                            <img className='rounded-2xl shadow-md'
                                src={image}
                            />
                        </figure>
                    </div>
                    <div className='flex justify-center'>
                        <div className="card-body">
                            <h2 className="card-title font-bold text-3xl">{title}</h2>
                            <p className='text-xl font-normal text-gray-500'>Developed by <span className='text-[#9F62F2]'>{companyName}</span></p>
                            <div className='flex gap-8 sm:gap-10 md:gap-20 mt-5'>
                                <div>
                                    <div><img src={downloadIcon} alt="" /></div>
                                    <p className='text-gray-500'>Downloads</p>
                                    <div className='text-4xl font-extrabold text-gray-300'>{formatNumber(downloads)}</div>
                                </div>
                                <div>
                                    <div><img src={ratingsIcon} alt="" /></div>
                                    <p className='text-gray-500'>Ratings</p>
                                    <div className='text-4xl font-extrabold text-gray-300'>{formatNumber(ratingAvg)}</div>
                                </div>
                                <div>
                                    <div><img src={reviewsIcon} alt="" /></div>
                                    <p className='text-gray-500'>Reviews</p>
                                    <div className='text-4xl font-extrabold text-gray-300'>{formatNumber(reviews)}</div>
                                </div>
                            </div>

                            <div className='mt-5'>
                                <button disabled={btnState} 
                                onClick={() => handleBtn()} 
                                className='btn btn-success'>{btnState ? 'Installed' : `Install Now (${size} MB)`}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='max-w-6xl mx-auto p-5'>
                <h2 className='font-bold text-2xl mb-5'>Ratings</h2>
                <div className="w-full h-[400px] mx-auto">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            layout='vertical'
                            data={rRatings}
                            margin={{
                                top: 5,
                                left: 10,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />

                            <XAxis type="number" />
                            <YAxis dataKey="name" type="category" />

                            <Tooltip cursor={{ fill: 'transparent' }} />
                            <Legend />

                            <Bar
                                dataKey="count"
                                fill="#FF8C00"
                                activeBar={<Rectangle fill="#D8B4FE" stroke="#9F62F2" />}
                                barSize={20}
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
            <div className='max-w-6xl mx-auto pl-5'>
                <h2 className='font-bold text-2xl mb-5'>Description</h2>
                <p className='px-5 text-[#627382]'>{description}</p>
            </div>

            <ToastContainer />
        </div>
    );
};

export default AppDetails;
