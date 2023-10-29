import React from 'react'
import style from "./Contact.module.css"
import {Link} from "react-router-dom"

function Contact() {
  return (
    <div className={style.contenedor}>
      <br />
      <Link to={"/"}><button>BACK</button></Link>
      <br />
      <div className={style.card}>
       <h1>CONTACT INFO</h1>
      </div>
    </div>
  )
}

export default Contact
