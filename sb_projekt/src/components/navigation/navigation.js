import React from "react";
import logo from "/home/nananeko1305/Documents/Projects/SB_Projekt/sb_projekt/src/images/logo.png";
import phone from "/home/nananeko1305/Documents/Projects/SB_Projekt/sb_projekt/src/images/phone.png";
import house from "/home/nananeko1305/Documents/Projects/SB_Projekt/sb_projekt/src/images/house.png";

import {Link, Outlet} from "react-router-dom";

const Navigation = () => {
    return (
        <>
            <Header/>
            <NavigationBar/>
            <Outlet/>
        </>
    );
}

const NavigationBar = () => {
    return (
        <>
            <nav className={`navbar navbar-expand`}>
                <div className={`container-fluid mt-3 p-2 w-75 justify-content-center bg-light`}>
                    <ul className={`navbar-nav `}>
                        <li className={`nav-item border-end justify-content-between`}>
                            <Link className={`nav-link`} to="/">NASLOVNA</Link>
                        </li>
                        <li className={`nav-item border-end`}>
                            <Link className={`nav-link`} to="/about">O NAMA</Link>
                        </li>
                        <li className={`nav-item`}>
                            <Link className={`nav-link`} to={`/products`}>PROIZVODI</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

const Header = () => {
    return (
        <>
            <div className={`d-flex row w-75 mx-auto mt-3`}>
                <div className={`d-flex col-6 justify-content-center align-items-center`}>
                    <Link to={`/`}><img src={logo} alt={`sb-logo`}/></Link>
                </div>
                <div className={`d-flex col-4 justify-content-between align-items-center`}>
                    <div className={`d-flex`}>
                        <img src={phone} alt={`phone-icon`}/>
                        <div className={`row`}>
                            <div className={``}>
                                +381 65 2 632 345
                            </div>
                            <div>
                                +381 64 1 940 936
                            </div>
                        </div>
                    </div>
                    <div className={`d-flex`}>
                        <img src={house} alt={`house-icon`}/>
                        <div className={`row`}>
                            <div>
                                Dositejeva 17
                            </div>
                            <div>
                                Vrnjačka Banja
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navigation;