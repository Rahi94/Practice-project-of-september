import React from 'react';
import { FaInstagram, FaTwitter } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa6';

const FindUs = () => {
    return (
        <div>
            <h2 className='font-bold mt-3 mb-5'>Find Us on</h2>
            <div>
                <div className="join join-vertical  btn-outline w-full">
                    <button className="btn join-item bg-base-100"><FaFacebook></FaFacebook> Facebook</button>
                    <button className="btn join-item bg-base-100"> <FaTwitter></FaTwitter> Twitter</button>
                    <button className="btn join-item  bg-base-100"><FaInstagram></FaInstagram>Instagram</button>
                </div>
            </div>
        </div>
    );
};

export default FindUs;