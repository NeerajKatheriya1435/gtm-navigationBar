import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import styles from "../styles/header.module.css"
import "../styles/delete.css"
import { GiHamburgerMenu } from "react-icons/gi";
const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const hambergerMenu = () => {
        setIsOpen((open) => !open)
    }
    return (
        <main className='mainContainer'>
            <nav className="navigationBar res-navigation">
                <div className="burger" onClick={hambergerMenu}>
                    <GiHamburgerMenu style={{ height: "30px", width: "30px" }} />
                </div>
                <ul className={`flexUl res-navbar ${isOpen ? "not-responsive" : ''}`}>
                    <li className='lisItem'>
                        <Link to="/">Home</Link>
                    </li>
                    <li className='lisItem'>
                        <Link to="/about">About</Link>
                    </li>
                    <li className='lisItem'>
                        <Link to="/service">Service</Link>
                    </li>
                    <li className='lisItem'>
                        <Link to="/product">Product</Link>
                    </li>
                    <li className='lisItem'>
                        <Link to="/team">Team</Link>
                    </li>
                    <li className='lisItem'>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li className='lisItem'>
                        <Link to="/career">Career</Link>
                    </li>
                    <li className='lisItem'>
                        <Link to="/director">Director</Link>
                    </li>
                    <li className='lisItem'>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </main>
    )
}

export default Header