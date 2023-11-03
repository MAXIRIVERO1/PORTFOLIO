import React from 'react'
import style from "./Projects.module.css"
import {Link} from "react-router-dom"
import food from "./food.jpg"

function Projects() {
  return (
    <div>
    <div className={style.back}>
    <Link to={"/"}><button className={style.button}>BACK</button></Link>
    </div>
    <div className={style.contenedor}>
      <div className={style.card}>
        <Link target="_blank" to="https://github.com/MAXIRIVERO1/FOODS"><img className={style.img} src={food} alt="project"/></Link><br/>
        <a target="_blank" href="https://github.com/MAXIRIVERO1/FOODS">Check on GitHub</a>
      </div>
    </div>
    </div>
  )
}

export default Projects
