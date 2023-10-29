import React from 'react'
import foto from './foto.jpg'; 
import style from "./home.module.css"
import BurguerMenu from "../BurgerMenu/BurgerMenu"
function Home() {
  return (
    <div className={style.contenedor}>
      <br />
      <BurguerMenu></BurguerMenu>
      <br />
      <div className={style.card}>
        <h1>Alfredo Maximiliano Castillo(MAXI)</h1>
        <h2>Full Stack Developer💻</h2>
        <img className={style.img} src={foto} alt="" />
      </div>
    </div>
  )
}

export default Home
