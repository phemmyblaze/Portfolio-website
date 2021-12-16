import React from 'react';
import "./topbar.css";
import {Person, Mail} from "@material-ui/icons"

const Topbar = () => {
    return (
        <div className="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">PB</a>
                    <div className="itemcontainer">
                    <Person/>
                    <span>+2349099716233</span>
                    </div>
                    <div className="itemcontainer">
                    <Mail/>
                    <span>aakinuliola@gmail.com</span>
                    
                    </div>
                </div>
                <div className="right">
                
                </div> 
            </div>
        </div>
    )
}

export default Topbar

