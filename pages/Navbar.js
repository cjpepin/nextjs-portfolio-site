import React, {useState} from 'react';
const NavBar = () => {
    return (
        <div className='nav-body'>
            <button id="me" className="nav-button">
                <p id="me">About</p>
            </button>

            <button id="fd" className="nav-button">
                <p id="fd">Flappy Dog</p>
            </button>

            <button id="dj" className="nav-button">
                <p id="dj">Doogle Jump</p>
            </button>
        </div>
    )
}

export default NavBar;