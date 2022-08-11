import React, {useState} from 'react';
const NavBar = () => {

    function handleButtonClick(e){
        if(e.target.id === "me")
            return
        else if(e.target.id === "pc")
            window.location.href = "https://cjpepin.github.io/lifting-chart/";
        else if(e.target.id === "pp")
            window.location.href = "https://powerprogress.herokuapp.com/"
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
        </div>
    )
}

export default NavBar;