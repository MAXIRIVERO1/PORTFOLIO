import React from 'react'
import style from "./Contact.module.css"
import {Link} from "react-router-dom"
import gmail from "./gmail.jpg"
import linkedin from "./linkedin.jpg"
import github from "./github.jpg"

function Contact() {
  return (
    <div>
    <div className={style.back}>
    <Link to={"/"}><button className={style.button}>BACK</button></Link>
    </div>
    <div className={style.contenedor}>
      <div className={style.card}>
        <Link target="_blank" to="mailto:maximilianoa.castillorivero@gmail.com"><img className={style.img} src={gmail} alt=""/></Link><br/>
        <a target="_blank" href="mailto:maximilianoa.castillorivero@gmail.com">Send Email</a>
      </div>
      <div className={style.card}>
        <Link target="_blank" to="https://github.com/MAXIRIVERO1"><img className={style.img} src={github} alt=""/></Link><br/>
        <a target="_blank" href="https://github.com/MAXIRIVERO1">GitHub Profile</a>
      </div>
      <div className={style.card}>
        <Link target="_blank" to="https://www.linkedin.com/in/maximiliano-developer"><img className={style.img} src={linkedin} alt=""/></Link><br/>
        <a target="_blank" href="https://www.linkedin.com/in/maximiliano-developer">Linkedin Profile</a>
      </div>
    </div>
    </div>
  )
}

export default Contact
