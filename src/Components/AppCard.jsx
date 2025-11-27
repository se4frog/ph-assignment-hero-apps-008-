import React from 'react';
import downloads from '../assets/icon-downloads.png'
import ratings from '../assets/icon-ratings.png'
import { Link } from 'react-router';

const AppCard = ({ app }) => {

    const formatter = new Intl.NumberFormat('en-US', {
        notation: "compact",
        compactDisplay: "short"
    });

    const formatNumber = num => formatter.format(num);


    return (
        <div>
            <Link to={`/app/${app.id}`}>
                <div className="card bg-base-100 max-w-96 shadow-sm  hover:bg-gray-800 hover:border-gray-700  hover:scale-105
            transition ease-in-out">
                    <figure className="px-10 pt-10">
                        <img
                            src={app.image}
                            alt={app.title}
                            className="rounded-xl w-32 h-32 object-contain" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {app.title}
                        </h2>

                        <div className="card-actions justify-between flex">
                            <div className="badge badge-outline text-green-600">
                                <div>
                                    <img className='w-5' src={downloads} alt="" />
                                </div>
                                <div>{formatNumber(app.downloads)}</div>
                            </div>
                            <div className="badge badge-outline text-yellow-600">
                                <div>
                                    <img className='w-5' src={ratings} alt="" />
                                </div>
                                <div>{formatNumber(app.ratingAvg)}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default AppCard; 