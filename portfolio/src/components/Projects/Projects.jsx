import React from 'react'
import style from "./Projects.module.css"
import {Link} from "react-router-dom"
import food from "./food.jpg"
import portfolio from "./portfolio.jpg"
import xul from "./xul.jpg"
import comingsoon from "./comingsoon.jpg"
import Footer from '../Footer/Footer'


function Projects() {
  return (
    <div className={style.background}>
    <div className={style.back}>
    <Link to={"/"}><button className={style.button}>BACK</button></Link>
    </div>
    <div className={style.contenedor}>
      <div className={style.card}>
        <Link target="_blank" to="https://github.com/MAXIRIVERO1/FOODS"><img className={style.img} src={food} alt="project"/></Link><br/>
        <a className={style.text} target="_blank" href="https://github.com/MAXIRIVERO1/FOODS">Check on GitHub</a><br/>
        <Link className={style.text} to={`/detail/FOODS`}>Detail</Link>
      </div>

      <div className={style.card}>
        <Link target="_blank" to="https://github.com/MAXIRIVERO1/PORTFOLIO"><img className={style.img} src={portfolio} alt="project"/></Link><br/>
        <a className={style.text} target="_blank" href="https://github.com/MAXIRIVERO1/PORTFOLIO">Check on GitHub</a><br/>
        <Link className={style.text} to={`/detail/PORTFOLIO`}>Detail</Link>
      </div>

      <div className={style.card}>
        <Link target="_blank" to="https://www.youtube.com/watch?v=BGJdh_8pxvo"><img className={style.img} src={xul} alt="project"/></Link><br/>
        <a className={style.text} target="_blank" href="https://www.youtube.com/watch?v=BGJdh_8pxvo">Check on Youtube</a><br/>
        <Link className={style.text} to={`/detail/XUL`}>Detail</Link>
      </div>

      <div className={style.card}>
        <Link ><img className={style.img} src={comingsoon} alt="project"/></Link>
        <p className={style.text} >New project coming soon...</p>
      </div>
    </div>
    <Footer></Footer>
    </div>
  )
}

export default Projects
