import React, {useState} from 'react'
import style from "./About.module.css"
import {Link} from "react-router-dom"


function About() {
  const [lang, setLang] = useState(true)
  
  const handleClick =()=>{
    if(lang){ setLang(false) }
    else{ setLang(true)}
  }
  return (
    <div>
      <div className={style.back}>
      <Link to={"/"}><button className={style.button}>BACK</button></Link>
      {lang ? <button className={style.button} onClick={handleClick}>SPANISH</button> : <button className={style.button} onClick={handleClick}>ENGLISH</button>}
      </div>
    <div className={style.contenedor}>
      {lang ? <div className={style.card}>
        <h1>Alfredo Maximiliano Castillo(MAXI)</h1>
        <h2>Full Stack Developer💻</h2>
        <p>Maxi, a human rights activist, I have worked in the Ministry of Justice and Human Rights (forgive the redundancy), in the area of sexual diversity and as a guide for the ESMA Memory Site, today a programming enthusiast, born in Argentina and with a life marked by experiences in two iconic cities: Buenos Aires and Madrid. For four years, I lived in each of these cities, absorbing their cultures and enriching my perspective on life.<br/><br/>
        At age 25, I went through a shocking event that transformed my path. In search of answers and emotional refuge, I stumbled upon a video about computer logic on my social network. Logic became my lighthouse, a constant guide that took me to the fascinating world of programming in which I learned to use technologies such as:<br/>JAVASCRIPT, HTML, CSS, REACT, REDUX, EXPRESS, NODE JS, GIT, GITFLOW, SEQUELIZE && PostgreSQL, MONGODB<br/><br/>
        Programming became my profession, and for a simple but powerful reason: it works or it doesn't. In every line of code, I find challenges and rewards. When a program finally works, I experience a sense of accomplishment that drives me to keep going.<br/>
        I want to solve problems related to code in:<br/>BACK END || FRONT END || FULLSTACK DEVELOPER<br/><br/>I see myself as a project in constant evolution. Every day is an opportunity to improve myself and grow as a programmer and as an individual. Programming is not only my profession, but also my personal journey of self-discovery and continuous improvement.</p>
      </div> : 
      <div className={style.card}>
      <h1>Alfredo Maximiliano Castillo(MAXI)</h1>
      <h2>Full Stack Developer💻</h2>
      <p>Maxi, un activista de los derechos humanos, he trabajado en el Ministerio de Justicia y Derechos Humanos(valga la redundancia), en el area de diversidad sexual y como guia del Sitio de Memoria ESMA, hoy en dia un entusiasta de la programación, nacido en Argentina y con una vida marcada por experiencias en dos ciudades icónicas: Buenos Aires y Madrid. Durante cuatro años, viví en cada una de estas ciudades, absorbiendo sus culturas y enriqueciendo mi perspectiva de la vida.<br/><br/>
      A los 25 años, atravesé un evento impactante que transformó mi camino. En busca de respuestas y un refugio emocional, me tope con un video sobre lógica informática en mi red social. La lógica se convirtió en mi faro, una guía constante que me llevó al fascinante mundo de la programación en la que aprendí a utilizar tecnologias como:<br/>JAVASCRIPT, HTML, CSS, REACT, REDUX, EXPRESS, NODE JS, GIT, GITFLOW, SEQUELIZE && PostgreSQL, MONGODB<br/><br/>
      La programación se convirtió en mi profesión, y por una razón simple pero poderosa: funciona o no funciona. En cada línea de código, encuentro desafíos y recompensas. Cuando un programa finalmente funciona, experimento una sensación de superación que me impulsa a seguir adelante.<br/>
      Me quiero desempeñar en resolución de problemas relacionados al código en:<br/>BACK END || FRONT END || FULLSTACK DEVELOPER<br/><br/>Me veo a mi mismo como un proyecto en constante evolución. Cada día es una oportunidad para superarme a mi mismo y crecer como programador y como individuo. La programación no solo es mi profesión, sino también mi viaje personal de autodescubrimiento y superación continua.</p>
      </div>
      }
    </div>
    </div>
  )
}

export default About
