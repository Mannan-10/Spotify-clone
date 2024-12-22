import React from 'react'

const Sidebaar = () => {
    return (
        <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex'>
            <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-around'>
                <div className='flex items-center gap-3 pl-8 cursor-pointer '>
                    <lord-icon className='w-6'
                        src="https://cdn.lordicon.com/cnpvyndp.json"
                        trigger="hover"
                        colors="primary:#1b1091">
                    </lord-icon>
                    <p className='font-bold'>Home</p>
                </div>
                <div className='flex items-center gap-3 pl-8 cursor-pointer '>
                    <lord-icon
                        src="https://cdn.lordicon.com/kkvxgpti.json">
                    </lord-icon>
                    <p className='font-bold'>Search</p>
                </div>

            </div>
        </div>
    )
}

export default Sidebaar