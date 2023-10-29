import React from 'react'
import style from "./Certificates.module.css"
import {Link} from "react-router-dom"

function Certificates() {
  return (
    <div className={style.contenedor}>
      <br />
      <Link to={"/"}><button>BACK</button></Link>
      <br />
      <div className={style.card}>
       <h1>CERTIFICATES</h1>
      </div>
    </div>
  )
}

export default Certificates
