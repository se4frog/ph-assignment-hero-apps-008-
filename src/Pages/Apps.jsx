import React, { useState } from 'react';
import useAppsFunc from '../Hooks/useAppsFunc';
import AppCard from '../Components/AppCard';
import searchIcon from '../assets/search.png'
import AppError from './AppError';
import Spinner from '../Components/Spinner';

const Apps = () => {


    const [search, setSearch] = useState('')
    const [searching, setSearching] = useState(false)

    const { apps, loading } = useAppsFunc()

    const handleSearchChange = (e) => {
        setSearching(true)
        setSearch(e.target.value)

        setTimeout(() => {
            setSearching(false)
        }, 200)
    }



    const trim = search.trim().toLocaleLowerCase()

    const searchedApps = trim ? apps.filter(app => app.title.toLocaleLowerCase().includes(trim)) : apps;





    return (
        <div>

            <div className='mt-10 text-center '>
                <h1 className='font-extrabold text-4xl'>All Our Applications</h1>
                <p className='my-5'>Explore All Apps on the Market certainly not developed by us. But that doesn't matter, we will code for you.</p>
                <div className='flex justify-between max-w-6xl mx-auto py-5'>
                    <div><h2 className='text-xl font-semibold'>({searchedApps.length}) Apps found</h2></div>
                    <div>
                        <label className='input rounded-3xl'>
                            <img src={searchIcon} alt="" />
                            <input defaultValue={search} onChange={handleSearchChange} type="search" placeholder='Search Your Apps' />
                        </label>
                    </div>
                </div>
                <div className='flex justify-center items-center gap-5'>
                    {loading || searching ? (
                        <Spinner />
                    ) : (
                        searchedApps.length === 0 ? (
                            <h1 className='text-5xl font-semibold text-[#001931] text-center mt-5'>
                                No App Found 💀
                            </h1>
                        ) : (
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
                                {searchedApps.map(app => (
                                    <AppCard app={app} key={app.id} />
                                ))}
                            </div>
                        )
                    )}

                </div>

            </div>
        </div>
    );
};

export default Apps;