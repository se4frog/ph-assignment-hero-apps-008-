import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router';
import Hero from '../Components/Hero';
import Banner from '../Components/Banner';
import useAppsFunc from '../Hooks/useAppsFunc';
import AppCard from '../Components/AppCard';
import Spinner from '../Components/Spinner';



const Home = () => {

    const { apps, loading } = useAppsFunc()

    if (loading) return <Spinner></Spinner>;

    const trendingApps = apps.slice(0, 8);




    return (
        <div>

            <Hero></Hero>
            <Banner></Banner>

            <div className='mt-10 text-center '>
                <h1 className='font-extrabold text-4xl'>Trending Apps</h1>
                <p className='my-5'>Explore All Trending Apps on the Market certainly not developed by us</p>
                <div className='flex justify-center gap-5'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
                        {
                            trendingApps.map(app => (
                                <AppCard app={app} key={app.id}></AppCard>
                            ))
                        }
                    </div>
                </div>
                <div><Link to='/apps' className='btn btn-primary mt-10'>Show All</Link></div>
            </div>

        </div>
    );
};

export default Home;            