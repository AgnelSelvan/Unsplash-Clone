import React, { useState } from 'react'
import { useContext } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import AppContext from '../store/AppContext'
import Logo from "./../assets/images/logo.png"
import firebase from './../config/firebase'
import Editorial from './home/Editorial'

export default function Home() {
    const [isLoggedIn, user] = useContext(AppContext)
    const history = useHistory();
    const [selectedNav, setSelectedNav] = useState("editorial");

    function BuildLogo() {
        return <div className="flex items-center">
            <img src={Logo} width="60" alt="Logo" />
            <div className="" >
                <p className="text-xl font-bold">Unsplash</p>
                <p className="text-xs">Photos for everyone</p>
            </div>
        </div>
    }

    function handleClick(e) {
        e.preventDefault()
        firebase.auth().signOut().then(() => {
            history.replace("/login")
        }).catch(err => {
            console.log(err);
        })
    }

    function handleNavClick(e, navName){
        console.log(navName);
        setSelectedNav(navName);
    }

    function Header(){
        return <nav className="px-5 py-3 flex flex-col text-sm">
            <div className="flex justify-between items-center">
                <ul className="flex w-2/3 items-center">
                    <li className="w-1/5">
                        <NavLink to="/dashboard"><BuildLogo /></NavLink>
                    </li>
                    <div className="mt-1 w-full relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 pt-1 flex items-center pointer-events-none">
                            <span class="text-gray-500 sm:text-sm sm:leading-5">
                                <i className="fas fa-search"></i>
                            </span>
                        </div>
                        <div className="absolute inset-y-0 right-0 pr-4 pt-1 flex items-center pointer-events-none">
                            <span class="text-gray-500 sm:text-sm sm:leading-5">
                                <button ><i className="fas fa-times"></i></button>
                            </span>
                        </div>
                        <input type="text" className="w-full py-2 px-10 border rounded-full shadow focus:outline-none " placeholder="Search free high-resolution photos" />
                    </div>
                </ul>
                <ul className=" w-1/3 flex justify-evenly items-center content-center">
                    <li className="text-gray-600">Explore</li>
                    <li className="text-gray-600">Unsplash Awards</li>
                    <li><i className="fas fa-ellipsis-h text-gray-600"></i></li>
                    <li className="border border-gray-400 px-2 py-1 rounded-md text-gray-600">Submit a photo</li>
                    <li className="text-gray-400" style={{ borderLeft: "1px solid ", height: "40px" }}></li>
                    <li><i class="fas fa-bell text-lg text-gray-700"></i></li>
                    <li>
                        {isLoggedIn ? <button onClick={handleClick}><i className="fas fa-user-circle fa-2x text-gray-600"></i></button> :
                            <span className="flex items-center">
                                <NavLink activeClassName="underline" to="/login" className="text-gray-700 text-center mr-5">Login</NavLink>
                                <p className="bg-green-500 py-1 px-2 border rounded">
                                    <NavLink activeClassName="underline" to="/join" className="text-gray-100 ">Join Free</NavLink>
                                </p>
                            </span>
                        }
                    </li>
                </ul>
            </div>
            <div className="mt-4 w-full text-gray-600">
                <div className="flex justify-between  items-center">
                <ul className="flex justify-evenly w-2/3 items-center">
                    <li className={`cursor-pointer ${selectedNav === "editorial" ? "text-gray-900 font-semibold" : "text-gray-600"}`} onClick={(e) => handleNavClick(e, "editorial")} >Editorial</li>
                    <li className="text-gray-400" style={{ borderLeft: "1px solid ", height: "30px" }}></li>
                    <li className={`cursor-pointer ${selectedNav === "architecture" ? "text-gray-900  font-semibold" : "text-gray-600"}`} onClick={(e) => handleNavClick(e, "architecture")}>Architecture</li>
                    <li className={`cursor-pointer ${selectedNav === "current_events" ? "text-gray-900  font-semibold" : "text-gray-600"}`} onClick={(e) => handleNavClick(e, "current_events")}>Current Events</li>
                    <li className={`cursor-pointer ${selectedNav === "experimental" ? "text-gray-900  font-semibold" : "text-gray-600"}`} onClick={(e) => handleNavClick(e, "experimental")}>Experimental</li>
                    <li className={`cursor-pointer ${selectedNav === "fashion" ? "text-gray-900  font-semibold" : "text-gray-600"}`} onClick={(e) => handleNavClick(e, "fashion")}>Fashion</li>
                    <li className={`cursor-pointer ${selectedNav === "film" ? "text-gray-900  font-semibold" : "text-gray-600"}`} onClick={(e) => handleNavClick(e, "film")}>Film</li>
                    <li className={`cursor-pointer ${selectedNav === "health_wellness" ? "text-gray-900  font-semibold" : "text-gray-600"}`} onClick={(e) => handleNavClick(e, "health_wellness")}>Health & Wellness</li>
                    <li className={`cursor-pointer ${selectedNav === "interior" ? "text-gray-900  font-semibold" : "text-gray-600"}`} onClick={(e) => handleNavClick(e, "interior")}>Interior</li>
                    <li className={`cursor-pointer ${selectedNav === "nature" ? "text-gray-900  font-semibold" : "text-gray-600"}`} onClick={(e) => handleNavClick(e, "nature")}>Nature</li>
                    <li className={`cursor-pointer ${selectedNav === "people" ? "text-gray-900  font-semibold" : "text-gray-600"}`} onClick={(e) => handleNavClick(e, "people")}>People</li>
                    <li className={`cursor-pointer ${selectedNav === "street_photography" ? "text-gray-900  font-semibold" : "text-gray-600"}`} onClick={(e) => handleNavClick(e, "street_photography")}>Street Photography</li>
                </ul>
                <p>View all</p>
                </div>
            </div>
        </nav>
    }
    
    return (
        <section className="h-screen" >
            <Header />
            <div className="flex items-center content-center justify-items-center justify-center">
                <Editorial />
            </div>
        </section>
    )
}
