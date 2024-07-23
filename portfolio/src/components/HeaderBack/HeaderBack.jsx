import style from "../HeaderBack/headerBack.module.css";
import { Link } from "react-router-dom";

import React from 'react'

function HeaderBack() {
    return (
        <div className={style.nav}>
            <Link to={"/"}><button className={style.button}>BACK</button></Link>
        </div>
    )
}

export default HeaderBack

