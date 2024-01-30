import React from 'react';
import "./style.css";
import user from "./user.png";
import {NavLink,Link} from "react-router-dom"

export const Navbar = () => {
  return (
        <nav className='py-4 px-5 bg-emerald-950 h-14'>
            <ul className="flex text-white">
                <li className='mx-2 text-xl'>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li className='mx-3 text-xl'>
                    <NavLink to="/About">About</NavLink>
                </li>
                <li className='mx-3 text-xl'>
                    <NavLink to="/service">Services</NavLink>
                </li>
                <li className='mx-4 text-xl'>
                    <NavLink to='/contact'>Contact</NavLink>
                </li>
                <li className='ml-auto'>
                    <img src={user} alt='img not show`' width="30px"/>
                </li>
            </ul>
        </nav>
  )
}



export default Navbar;