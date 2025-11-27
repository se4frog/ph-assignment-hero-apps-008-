import React from 'react';
import downloadIcon from '../assets/icon-downloads.png';
import ratingsIcon from '../assets/icon-ratings.png'


const InstAppCard = ({app, handleRemove}) => {

 const formatter = new Intl.NumberFormat('en-US', {
        notation: "compact",
        compactDisplay: "short"
    });

    const formatNumber = num => formatter.format(num);

    return (
        <div>
            <div className="bg-base-100 shadow-sm shadow-gray-900 rounded-xl
             md:mx-5 
             flex justify-between items-center gap-5
             mb-5">
                <div className=''>
                    <figure className="md:px-5">
                        <img
                            src={app.image}
                            className="rounded-xl w-32 h-32  object-contain" />
                    </figure>
                </div>
                <div className='flex flex-col sm:flex-row justify-around sm:justify-between sm:items-center flex-1'>
                    <div className=''>
                        <h2 className='text-left text-2xl font-bold'>{app.title}</h2>
                        <div className='flex gap-3 lg:gap-5'>
                            <div className='flex items-center gap-1 text-green-600 text-[15px] md:text-lg'><img className='w-5' src={downloadIcon} alt="" />{formatNumber(app.downloads)}</div>
                            <div className='flex items-center gap-1 text-orange-300 text-[15px] md:text-lg'><img className='w-5' src={ratingsIcon} alt="" />{formatNumber(app.ratingAvg)}</div>
                            <div className='text-gray-400 text-[15px] md:text-lg'><p>{app.size} MB</p></div>
                        </div>
                    </div>
                    <div>
                        <div className='mr-20 sm:mr-10'>
                            <button onClick={()=>handleRemove(app.id)} className='btn btn-primary w-full '>Uninstall</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstAppCard;