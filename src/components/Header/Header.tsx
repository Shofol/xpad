import React, { useEffect, useRef, useState } from 'react'
import styles from './Header.module.css';

const Header = () => {

    return (
        <header className="max-w-sm sm:max-w-md lg:max-w-full mx-6 lg:mx-28 mt-20 lg:mt-52">
            <p className="text-gray-100 pl-10 lg:pl-24 pr-2 mb-3 text-tiniest lg:text-lg">Welcome</p>
            <h1 className={`${styles.header} py-2 pl-10 lg:py-6 lg:leading-tight lg:pr-32 lg:pl-24 pr-4 bg-xpad-grad text-xs lg:text-3xl font-bold uppercase`}>Bridging the gap between investors and projects one variable at a time</h1>
            <div className="flex mt-5 lg:mt-14">
                <p className="text-gray-400 pl-10 lg:pl-24 text-tiny lg:text-xl lg:flex-1 lg:pr-24">mollis nisi euismod luctus pariatur. luctus risus duis fermentum. commodo ipsum consectetur bibendum laboris elit. aenean tempor consequat id donec aenean mollis do culpa consequat ligula feugiat</p>
                <div className="lg:flex lg:flex-1 lg:justify-center">
                    <img src="./logoLarge.png" className="my-4 mx-2 " width="100%" height="auto" style={{ maxWidth: '266px' }} alt="xpad large logo" />
                </div>
            </div>
            <div className="flex flex-col lg:flex-row mt-5 lg:mt-16">
                <div className={`${styles.headerBottom} bg-xpad-grad h-12 lg:h-24 w-8/12 self-end lg:order-2 lg:flex-1`} ></div>

                <div className="text-gray-100 uppercase text-tiny mt-5 lg:mt-0 flex justify-end lg:justify-start lg:pl-24 lg:self-start lg:order-1 lg:flex-1 lg:text-xl">
                    <a className="mr-2 lg:mr-3 border border-gray-100 rounded-md px-3 lg:px-4 py-1 hover:bg-xpad-an-grad hover:text-black cursor-pointer">Buy xpad</a>
                    <a className="mr-2 lg:mr-3 border border-gray-100 rounded-md px-3 lg:px-4 py-1 hover:bg-xpad-an-grad hover:text-black cursor-pointer">Lightpaper</a>
                    <a className="border border-gray-100 rounded-md px-3 lg:px-4 py-1 hover:bg-xpad-an-grad hover:text-black cursor-pointer">Pitch deck</a>
                </div>
            </div>
        </header>
    )
}

export default Header
