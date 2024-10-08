import React, { useState } from 'react';
import style from "./BurgerMenu.module.css";
import { Link } from 'react-router-dom';

function BurgerMenu() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className={style["burger-menu"]}>
            <div className={`${style["menu-toggle"]} ${menuOpen ? style["open"] : ''}`} onClick={toggleMenu}>
                <div className={style.bar}></div>
                <div className={style.bar}></div>
                <div className={style.bar}></div>
            </div>
            <ul className={`${style["menu-items"]} ${menuOpen ? style["open"] : ''}`}>
                <li><Link to={"/about"}><button className={style.button}>About me</button></Link></li>
                <li><Link to={"/certificates"}><button className={style.button}>Certificates</button></Link></li>
                <li><Link to={"/projects"}><button className={style.button}>Projects</button></Link></li>
                <li><Link to={"/skills"}><button className={style.button}>Skills</button></Link></li>
            </ul>
        </div>
    );
}

export default BurgerMenu;
