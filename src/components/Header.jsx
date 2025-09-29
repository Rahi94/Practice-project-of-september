import React from 'react';
import logo from "../assets/logo.png";
import { format } from 'date-fns';
const Header = () => {
    return (
        <div className='flex justify-center flex-col items-center gap-3'>
            <img className='w-[400px]' src={logo} alt="" />
            <p>Lorem ipsum, dolor sit</p>
            <p className='text-accent text-semibold'>{format(new Date(),"EEEE, MMMM do, yyyy")}</p>
        </div>
    );
};

export default Header;