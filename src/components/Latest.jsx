import React from 'react';
import Marquee from 'react-fast-marquee';

const Latest = () => {
    return (
        <div className='flex items-center gap-5 bg-base-200 p-3'>
            <p className='bg-secondary text-base-100 px-3 py-2'>latest</p>
           <Marquee className='flex gap-3' pauseOnHover ={true}>

                        <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, debitis!</p>
                        <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, debitis!</p>
                        <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, debitis!</p>

           </Marquee>

        </div>
    );
};

export default Latest;