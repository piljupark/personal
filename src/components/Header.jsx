import React, { useState } from "react";

import { headerNav } from "../constants";

const Header = () => {

    const[show, setShow] = useState(false);

    const toggleMenu = () => {
        setShow((prevShow) => !prevShow);
    };

    return (
        <header id="header" role="banner">
            <div className="header__inner">
                <div className="header__logo">
                    {/* <a href="/">Hello, Everyone</a> */}
                </div>
                <nav className={`header__nav ${show ? "show" : ""}`} role="navigation" aria-label="메인 메뉴">
                    <ul>
                        {headerNav.map((nav, key) => (
                            <li key={key}>
                                <a href={nav.url}>{nav.title}</a>
                            </li>
                        ))}
                        {/* // map() 메서드로 처리함.
                        <li><a href="#intro"></a></li>
                        <li><a href="#skill"></a></li>
                        <li><a href="#site"></a></li>
                        <li><a href="#port"></a></li>
                        <li><a href="#contact"></a></li>
                        */}
                    </ul>
                </nav>
                <div 
                    className="header__nav__mobile"
                    id="headerToggle"
                    aria-controls="primary-menu"
                    aria-expanded={show ? "true" : "false"}
                    role="button"
                    tabIndex="0"
                    onClick={toggleMenu}
                >
                    <span></span>
                </div>
            </div>
        </header>
    );
};



export default Header;