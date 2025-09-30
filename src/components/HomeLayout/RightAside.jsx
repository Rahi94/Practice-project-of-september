import React from 'react';
import SocialLogin from './SocialLogin';
import FindUs from './FindUs';
import QZone from '../HomeLayout/QZone';

const RightAside = () => {
    return (
        <div className='ml-10'>
            <SocialLogin></SocialLogin>
            <FindUs></FindUs>
            <QZone></QZone>
            
        </div>
    );
};

export default RightAside;