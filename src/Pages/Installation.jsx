import React, { useState } from 'react';
import InstAppCard from '../Components/InstAppCard';
import { loadLocalApps, removeLocalApps } from '../utils/localStorage';
import { toast, ToastContainer } from 'react-toastify';

const Installation = () => {

    const [installedApps, setInstalledApps] = useState(() => loadLocalApps())

    

    const [sortOrder, setSortOrder] = useState('none')

    const sortedApps = (() => {
        if (sortOrder === 'asc') {
            return [...installedApps].sort((a, b) => a.downloads - b.downloads)
        } else if (sortOrder === 'desc') {
            return [...installedApps].sort((a, b) => b.downloads - a.downloads)
        } else {
            return installedApps;
        }
    })()

    const handleRemove = id => {

        removeLocalApps(id)
        toast('👾 Uninstalled App!')

        setInstalledApps(prev => prev.filter(p => p.id !== id))
    }

    return (
        <div>

            <div className='mt-10 text-center '>
                <h1 className='font-extrabold text-4xl'>Your Installed Apps</h1>
                <p className='my-5'>Explore All Trending Apps on the Market certainly not developed by us</p>
                <div className='flex justify-between max-w-6xl mx-auto sm:p-5'>
                    <div><h2 className='text-xl font-semibold'> Apps found</h2></div>
                    <div>
                        <label className='input border-0'>
                            <select
                                className=''
                                defaultValue={sortOrder}
                                onChange={e => setSortOrder(e.target.value)}
                            >
                                <option className='bg-gray-500' value='none'>Sort by downloads</option>
                                <option className='bg-gray-500' value='asc'>Low   -&gt;   High</option>
                                <option className='bg-gray-500' value='desc'>High   -&gt;   Low</option>
                            </select>
                        </label>
                    </div>
                </div>
                <div className='max-w-6xl mx-auto'>
                    {
                        (sortedApps.length === 0)
                            ? <h1 className='text-5xl  font-semibold text-[#001931] text-center mt-5'>
                                No App Found 💀
                            </h1>

                            : sortedApps.map(app => <InstAppCard handleRemove={handleRemove} key={app.id} app={app}></InstAppCard>)


                    }
                </div>

            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Installation;