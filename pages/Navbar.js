import React, {useState} from 'react';
import Link from 'next/link'

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
            <Link href="/" id="me" className="nav-button">
                <p id="me">About</p>
            </Link>
            <Link href="https://cjpepin.github.io/lifting-chart/" if="pc" className="nav-button">
                <p id="pc">Powerlifting Chart</p>
            </Link>

            <Link href="https://powerprogress.herokuapp.com/" id="pp" className="nav-button">
                <p id="pp">PowerProgress</p>
            </Link>

            <Link href="https://cjpepin.github.io/ungerbot-frontend" id="ub" className="nav-button">
                <p id="ub">Ungerbot</p>
            </Link>

            <Link href="/MartianDefense" id="md" className="nav-button">
                <p id="md">Martian Defense</p>
            </Link>
        </div>
    )
}

export default NavBar;