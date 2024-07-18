"use client";

import React from 'react'

const Footer = () => {
    return (
        <footer className='h-40 mt-5 bg-gray-800'>
            <div className='flex p-5 justify-between'>
                <div className='text-center flex flex-col justify-center'>
                    <h1 className='text-3xl'>Welcome to Task Track</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, nostrum.</p>
                </div>
                <div className='text-center'>
                    <h1>Important Links</h1>
                    <ul>
                        <li><a href="#">Github</a></li>
                        <li><a href="#">LinkedIn</a></li>
                        <li><a href="#">Instagram</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer
