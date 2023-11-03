import React from 'react'
import style from "./Certificates.module.css"
import {Link} from "react-router-dom"
import CV from "./CV.jpg"
import henry from "./henry.jpg"
import efSet from "./efSet.jpg"

function Certificates() {
  return (
    <div>
    <div className={style.back}>
    <Link to={"/"}><button className={style.button}>BACK</button></Link>
    </div>
    <div className={style.contenedor}>
      <div className={style.card}>
        <Link target="_blank" to="https://drive.google.com/file/d/1iPAbELScNElMevB7X-TbfdVKORn3UJk3/view?usp=sharing"><img className={style.img} src={CV} alt="certificate"/></Link><br/>
        <a target="_blank" href="https://drive.google.com/file/d/1iPAbELScNElMevB7X-TbfdVKORn3UJk3/view?usp=sharing">Check CV</a>
      </div>
      <div className={style.card}>
        <Link target="_blank" to="https://certificates.soyhenry.com/new-cert?id=b92d38572a22aa4f5c50a8e6c657003c3cec6fcc8aa7f472ddde947d4049a3ee"><img className={style.img} src={henry} alt="certificate"/></Link><br/>
        <a target="_blank" href="https://certificates.soyhenry.com/new-cert?id=b92d38572a22aa4f5c50a8e6c657003c3cec6fcc8aa7f472ddde947d4049a3ee">Full Stack Developer</a>
      </div>
      <div className={style.card}>
        <Link target="_blank" to="https://www.efset.org/cert/dTkVmL"><img className={style.img} src={efSet} alt="certificate"/></Link><br/>
        <a target="_blank" href="https://www.efset.org/cert/dTkVmL">EF SET</a>
      </div>
    </div>
    </div>
  )
}

export default Certificates
