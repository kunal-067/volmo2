import Image from 'next/image'
import React from 'react'

function Layout({ children }) {
    return (
        <>
            <div className='flex justify-center items-center h-[100vh] w-[100vw] bg-green-100'>
                {children}
            </div>
        </>
    )
}

export default Layout