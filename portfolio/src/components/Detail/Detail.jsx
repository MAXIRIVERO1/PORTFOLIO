import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import db from './data';
import { Link } from "react-router-dom"
import style from "./Detail.module.css"
import Footer from "../Footer/Footer.jsx"

function Detail() {
    const { project } = useParams();
    console.log(project, db[5].name)
    const [lang, setLang] = useState(true)

    const handleClick = () => {
        if (lang) { setLang(false) }
        else { setLang(true) }
    }

    const found = db.find((o) => o.name === project);
    console.log(found)
    const imagePath = require(`./images/${found.imageName}`);


    return (
        <div>
            <div className={style.nav}>
                <Link to={"/projects"}><button className={style.button}>BACK</button></Link>
                {lang ? <button className={style.button} onClick={handleClick}>ESPAÑOL</button> : <button className={style.button} onClick={handleClick}>ENGLISH</button>}
            </div>
            <div className={style.contenedor}>
                {lang ? <div className={style.card}>
                    <h1>{found.english.title}</h1>
                    <img src={imagePath} alt={found.imageName} className={style.img} />
                    <p>{found.english.description}</p>
                    <p>Thank you for visiting and being part of my journey!</p>
                </div> :
                    <div className={style.card}>
                        <h1>{found.title}</h1>
                        <img src={imagePath} alt={found.imageName} className={style.img} />
                        <p>{found.description}</p>
                        <p>¡Gracias por visitar y ser parte de mi viaje!</p>
                    </div>
                }
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Detail;

