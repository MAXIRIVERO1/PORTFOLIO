import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import db from './data';
import {Link} from "react-router-dom"
import style from "./Detail.module.css"

function Detail() {
  const { project } = useParams();
  const [lang, setLang] = useState(true)
  
  const handleClick =()=>{
    if(lang){ setLang(false)}
    else{ setLang(true)}
  }

  const found = db.find((o) => o.name === project);

  return (
    <div>
      <div className={style.back}>
      <Link to={"/projects"}><button className={style.button}>BACK</button></Link>
      {lang ? <button className={style.button} onClick={handleClick}>SPANISH</button> : <button className={style.button} onClick={handleClick}>ENGLISH</button>}
      </div>
    <div className={style.contenedor}>
      {lang ? <div className={style.card}>
        <h1>{found.english.title}</h1>
        <p>{found.english.description}</p>
      </div> : 
      <div className={style.card}>
      <h1>{found.title}</h1>
      <p>{found.description}</p>
      </div>
      }
    </div>
    </div>
  );
}

export default Detail;

