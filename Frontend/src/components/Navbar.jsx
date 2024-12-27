import React, { useEffect, useState } from 'react';
import 'lord-icon-element';

const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cdn.lordicon.com/xdjxvujz.js';
        script.async = true;
        document.body.appendChild(script);
    }, []);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    return (
        <div className='flex bg-black p-4 items-center w-full fixed top-0 justify-between'>
            <div className='flex items-center space-x-4'>
                <img
                    src="https://www.citypng.com/public/uploads/preview/spotify-white-logo-symbol-icon-hd-png-11661570403q5drcznuwu.png"
                    alt="Spotify Logo"
                    className='w-12 h-12 border-2 border-black p-2 mt-0 rounded-full'
                />
                <div className='flex items-center'>
                    <lord-icon
                        src="https://cdn.lordicon.com/wmwqvixz.json"
                        trigger="hover"
                        colors="primary:#ffffff"
                        style={{ width: '35px', height: '35px' }}>
                    </lord-icon>
                    <p className='text-white ml-2'>Home</p>
                </div>
            </div>
            <div className='flex items-center justify-center w-full'>
                <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    placeholder="Search..."
                    className='p-2 rounded-full border border-gray-300 w-1/3'
                />
            </div>
        </div>
    );
};

export default Navbar;