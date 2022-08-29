import React, {useState} from 'react';
const NavBar = () => {

    function handleButtonClick(e){
    console.log(e)

        if(e.target.id === "me")
            window.location.href = "https://connorjpepin.com"
        else if(e.target.id === "pc")
            window.location.href = "https://cjpepin.github.io/lifting-chart/";
        else if(e.target.id === "pp")
            window.location.href = "https://powerprogress.herokuapp.com/"
        // else if(e.target.id === "md")
        //     window.location.href = "https://connorjpepin.com/MartianDefense"
        else if(e.target.id === "ub")
            window.location.href = "https://cjpepin.github.io/ungerbot-frontend"
    }

    return (
        <div className='nav-body'>
            <a href="/AboutMe" id="me" className="nav-button">
                <p id="me">About</p>
            </a>
            <a href="https://cjpepin.github.io/lifting-chart/" if="pc" className="nav-button">
                <p id="pc">Powerlifting Chart</p>
            </a>

            <a href="https://powerprogress.herokuapp.com/" id="pp" className="nav-button">
                <p id="pp">PowerProgress</p>
            </a>

            <a href="https://cjpepin.github.io/ungerbot-frontend" id="ub" className="nav-button">
                <p id="ub">Ungerbot</p>
            </a>

            <a href="/MartianDefense" id="md" className="nav-button">
                <p id="md">Martian Defense</p>
            </a>
        </div>
    )
}

export default NavBar;