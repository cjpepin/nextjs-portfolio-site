import React, {useState} from 'react';
const NavBar = () => {

    function handleButtonClick(e){
        if(e.target.id === "me")
            window.location.href = "https://connorjpepin.com"
        else if(e.target.id === "pc")
            window.location.href = "https://cjpepin.github.io/lifting-chart/";
        else if(e.target.id === "pp")
            window.location.href = "https://powerprogress.herokuapp.com/"
        else if(e.target.id === "md")
            window.location.href = "https://connorjpepin.com/MartianDefense"
        else if(e.target.id === "md")
            window.location.href = "https://cjpepin.github.io/ungerbot-frontend"
    }

    return (
        <div className='nav-body'>
            <button id="me" className="nav-button">
                <p id="me">About</p>
            </button>
            <button onClick={handleButtonClick} id="pc" className="nav-button">
                <p id="pc">Powerlifting Chart</p>
            </button>

            <button onClick={handleButtonClick} id="pp" className="nav-button">
                <p id="pp">PowerProgress</p>
            </button>

            <button onClick={handleButtonClick} id="ub" className="nav-button">
                <p id="ub">Ungerbot</p>
            </button>

            <button onClick={handleButtonClick} id="md" className="nav-button">
                <p id="md">Martian Defense</p>
            </button>
        </div>
    )
}

export default NavBar;