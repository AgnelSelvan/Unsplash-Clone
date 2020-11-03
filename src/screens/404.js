import React from 'react'
import {  NavLink } from 'react-router-dom';
import gif from './../assets/gif/weird-12.gif';
import logo from './../assets/images/white-logo.svg';

export default function NotFound() {
    return (
        <div className="h-screen relative overflow-hidden">

            <div className="absolute p-5" style={{ left: "50%" }}>
                <img width="40" src={logo} alt="Gif" />
            </div>
            <div className="absolute flex w-full h-full p-5 flex-col items-center justify-center">
                <div className="">

                    <div className="text-center">
                        <p className="text-6xl text-gray-200 font-extrabold">404</p>
                        <p className="text-xl text-gray-200 pb-4">Hm, the page you were looking for doesn't seem to exist anymore.</p>
                        <NavLink className="bg-white border rounded-md px-4 py-2 text-gray-600 my-4" to="/">
                            Back To Unsplash
                        </NavLink>
                    </div>
                </div>
            </div>
            <img src={gif} height="100%" width="100%" alt="Gif" />
        </div>
    )
}
