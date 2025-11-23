import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../assets/logo.png'

import React from 'react';
import { Link, NavLink } from 'react-router';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const getLinkClass = ({isActive}) => {
    return isActive 
      ? `text-[#9F62F2] border-b-2 border-purple-600`: '';}
      

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li>
                                <NavLink to='/'>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to='/apps'>Apps</NavLink>
                            </li>
                            <li>
                                <NavLink to='/installation'>Installation</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className='flex items-center gap-2'>
                        <Link to='/'><img className='w-10' src={logo} alt="" /></Link>
                        <Link to='/' className="text-xl font-bold text-transparent
                    bg-clip-text bg-linear-to-r from-[#632EE3] to-[#9F62F2]">HERO.IO</Link>
                    </div>
                </div>
                <div className="">

                </div>
                <div className="navbar-center">
                    <ul className="menu menu-horizontal px-1 navbar-center hidden lg:flex">
                        <li>
                            <NavLink to='/' className={getLinkClass}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/apps' className={getLinkClass}>Apps</NavLink>
                        </li>
                        <li>
                            <NavLink to='/installation' className={getLinkClass}>Installation</NavLink>
                        </li>

                    </ul>
                </div>
                <div className='navbar-end'>
                    <Link to='https://github.com/se4frog' className='btn btn-primary'><FontAwesomeIcon icon={faGithub} /> Contribute
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;