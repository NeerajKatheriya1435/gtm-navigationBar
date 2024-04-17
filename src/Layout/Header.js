import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from "../styles/header.module.css"
import { GiHamburgerMenu } from "react-icons/gi";
const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const hambergerMenu = () => {
        setIsOpen((open) => !open)
    }
    return (
        <main className={styles.mainContainer}>
            <nav className={`${styles.navigationBar} ${styles.resNavigation}`}>
                <div className={styles.burger} >
                    <GiHamburgerMenu
                        onClick={hambergerMenu}
                        style={{
                            height: "30px",
                            width: "30px",
                            border: "2px solid black",
                            borderRadius: "4px",
                            fontSize: "1.3rem",
                            margin: "4px"
                        }} />
                </div>
                <ul className={`${styles.flexUl} ${styles.resNavbar} ${isOpen ? styles.no : styles.notResponsive}`}>
                    <li className={styles.lisItem}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={styles.lisItem}>
                        <Link to="/about">About</Link>
                    </li>
                    <li className={styles.lisItem}>
                        <Link to="/service">Service</Link>
                    </li>
                    <li className={styles.lisItem}>
                        <Link to="/product">Product</Link>
                    </li>
                    <li className={styles.lisItem}>
                        <Link to="/team">Team</Link>
                    </li>
                    <li className={styles.lisItem}>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li className={styles.lisItem}>
                        <Link to="/career">Career</Link>
                    </li>
                    <li className={styles.lisItem}>
                        <Link to="/director">Director</Link>
                    </li>
                    <li className={styles.lisItem}>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </main>
    )
}

export default Header