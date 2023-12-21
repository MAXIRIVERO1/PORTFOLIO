import React from 'react'
import style from "./Certificates.module.css"
import {Link} from "react-router-dom"
import CV from "./CV.jpg"
import henry from "./henry.jpg"
import efSet from "./efSet.jpg"
import nodeYexpress from "./nodeYexpress.jpg"
import mongoDB from "./mongoDB.jpg"
import Footer from '../Footer/Footer'

function Certificates() {
  return (
    <div className={style.background}>
    <div className={style.back}>
    <Link to={"/"}><button className={style.button}>BACK</button></Link>
    </div>
    <div className={style.contenedor}>
      <div className={style.card}>
        <Link target="_blank" to="https://drive.google.com/file/d/1m5T0WOOebqox0gYGSwwEfW47EiUw3cGw/view?usp=sharing"><img className={style.img} src={CV} alt="certificate"/></Link><br/>
        <a className={style.text} target="_blank" href="https://drive.google.com/file/d/1m5T0WOOebqox0gYGSwwEfW47EiUw3cGw/view?usp=sharing">Check CV</a>
      </div>

      <div className={style.card}>
        <Link target="_blank" to="https://certificates.soyhenry.com/new-cert?id=b92d38572a22aa4f5c50a8e6c657003c3cec6fcc8aa7f472ddde947d4049a3ee"><img className={style.img} src={henry} alt="certificate"/></Link><br/>
        <a className={style.text} target="_blank" href="https://certificates.soyhenry.com/new-cert?id=b92d38572a22aa4f5c50a8e6c657003c3cec6fcc8aa7f472ddde947d4049a3ee">Full Stack Developer</a>
      </div>

      <div className={style.card}>
        <Link target="_blank" to="https://www.efset.org/cert/dTkVmL"><img className={style.img} src={efSet} alt="certificate"/></Link><br/>
        <a className={style.text} target="_blank" href="https://www.efset.org/cert/dTkVmL">EF SET</a>
      </div>

      <div className={style.card}>
        <Link target="_blank" to="https://videocursos.co/verificacion/733D689C99-150FA8FAB-12D279304/"><img className={style.img} src={nodeYexpress} alt="certificate"/></Link><br/>
        <a className={style.text} target="_blank" href="https://videocursos.co/verificacion/733D689C99-150FA8FAB-12D279304/">Node.js y Express</a>
      </div>

      <div className={style.card}>
        <Link target="_blank" to="https://platzi.com/p/maximilianoa.castillorivero/curso/4987-mongodb/diploma/detalle/"><img className={style.img} src={mongoDB} alt="certificate"/></Link><br/>
        <a className={style.text} target="_blank" href="https://platzi.com/p/maximilianoa.castillorivero/curso/4987-mongodb/diploma/detalle/">MongoDB</a>
      </div>
    </div>
    <Footer></Footer>
    </div>
  )
}

export default Certificates
