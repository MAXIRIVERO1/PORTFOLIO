import React from 'react'
import style from "./About.module.css"
import {Link} from "react-router-dom"

function About() {
  return (
    <div className={style.contenedor}>
      <br />
      <Link to={"/"}><button>BACK</button></Link>
      <br />
      <div className={style.card}>
        <h1>Alfredo Maximiliano Castillo(MAXI)</h1>
        <h2>Full Stack Developer💻</h2>
        <p>Maxi, un activista de los derechos humanos, he trabajado en el Ministerio de Justicia y Derechos Humanos(valga la redundancia), en el area de diversidad sexual y como guia del Sitio de Memoria ESMA, hoy en dia un entusiasta de la programación, nacido en Argentina y con una vida marcada por experiencias en dos ciudades icónicas: Buenos Aires y Madrid. Durante cuatro años, viví en cada una de estas ciudades, absorbiendo sus culturas y enriqueciendo mi perspectiva de la vida.<br/><br/>
        A los 25 años, atravesé un evento impactante que transformó mi camino. En busca de respuestas y un refugio emocional, me tope con un video sobre lógica informática en mi red social. La lógica se convirtió en mi faro, una guía constante que me llevó al fascinante mundo de la programación en la que aprendí a utilizar tecnologias como:<br/>HTML, CSS, JAVA SCRIPT, REACT, REDUX, EXPRESS, NODE JS, GITHUB, GIT, SEQUELIZE && SQL<br/><br/>
        La programación se convirtió en mi profesión, y por una razón simple pero poderosa: funciona o no funciona. En cada línea de código, encuentro desafíos y recompensas. Cuando un programa finalmente funciona, experimento una sensación de superación que me impulsa a seguir adelante.<br/>
        Me quiero desempeñar en resolución de problemas relacionados al código en:<br/>BACK END || FRONT END || FULLSTACK DEVELOPER<br/><br/>Me veo a mi mismo como un proyecto en constante evolución. Cada día es una oportunidad para superarme a mi mismo y crecer como programador y como individuo. La programación no solo es mi profesión, sino también mi viaje personal de autodescubrimiento y superación continua.</p>
      </div>
    </div>
  )
}

export default About
