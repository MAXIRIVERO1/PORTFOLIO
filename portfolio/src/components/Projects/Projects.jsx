import React from 'react'
import style from "./Projects.module.css"
import {Link} from "react-router-dom"

function Proyects() {
  return (
    <div className={style.contenedor}>
      <br />
      <Link to={"/"}><button>BACK</button></Link>
      <br />
      <div className={style.card}>
       <h1>Projects</h1>
      </div>
    </div>
  )
}

export default Proyects
