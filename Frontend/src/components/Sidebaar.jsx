import React, { useEffect } from 'react';
import 'lord-icon-element';

const Sidebaar = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cdn.lordicon.com/xdjxvujz.js';
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return (
        <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex'>
            <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-around'>
                <div className='flex items-center gap-3 pl-8 cursor-pointer '>
                    <lord-icon
                        src="https://cdn.lordicon.com/cnpvyndp.json"
                        trigger="hover"
                        style={{ width: '50px', height: '50px' }}
                        colors="primary:#fff">
                    </lord-icon>
                    <p className='font-bold'>Home</p>
                </div>
                <div className='flex items-center gap-3 pl-8 cursor-pointer '>
                    <lord-icon className='w-6'
                        src="https://cdn.lordicon.com/cnpvyndp.json"
                        trigger="hover">
                    </lord-icon>
                    <p className='font-bold'>Search</p>
                </div>
            </div>
        </div>
    );
};

export default Sidebaar;