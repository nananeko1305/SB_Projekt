import React from "react";
import logo from "/home/nananeko1305/Documents/Projects/SB_Projekt/sb_projekt/src/images/logo.png";
import {Outlet} from "react-router-dom";

const Navigation = () => {
    return (
        <>
            <div className={`d-flex row w-75 mx-auto bg-info`}>
                <div className={`d-flex col-4 bg-primary justify-content-center align-items-center`}>
                    <img src={logo} alt={`sb-logo`}/>
                </div>
                <div className={`d-flex col-8 bg-secondary justify-content-center`}>
                    <span>
                        Col2
                    </span>
                </div>
            </div>
            <Outlet/>
        </>
    );
}

export default Navigation;