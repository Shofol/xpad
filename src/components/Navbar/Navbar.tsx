import React from 'react'
import styles from './Navbar.module.css'

import {
    Link,
} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="max-w-sm md:max-w-xl md:mx-auto lg:max-w-full mx-6 lg:mx-28 flex justify-between items-start font-bold">
            <Link to="/" className={`${styles.logoBorder} px-8 py-1 bg-xpad-grad text-sm lg:px-12 lg:py-2 lg:text-3xl`}>Xpad</Link>
            <div className="text-gray-100 flex justify-between items-center self-end text-xs lg:text-2xl">
                <a href="/#aboutus" className=" hover:bg-xpad-grad hover:text-black rounded-md px-3 lg:px-5 py-1">About</a>
                <a href="/#tokenomics" className=" hover:bg-xpad-grad hover:text-black rounded-md px-3 lg:px-5 py-1">Tokenomics</a>
                <a href="/#connect" className=" hover:bg-xpad-grad hover:text-black rounded-md px-3 lg:px-5 py-1">Connect</a>
            </div>
        </nav>
    )
}

export default Navbar