import React from 'react';
import { Link } from "react-router-dom";
import Slider from "react-slick";
import skills from "./skills.js";
import style from "./Skills.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from '../Footer/Footer.jsx';

function Skills() {
  const settings = {
    dots: false, 
    infinite: true, 
    speed: 500,
    slidesToShow: 3, 
    slidesToScroll: 2, 
  };

  return (
    <div>
    <div className={style.container}>
      <div className={style.background}>
        <Link to={"/"}><button className={style.button}>BACK</button></Link>
      </div>
      <h1>Slide it!</h1>
      <div>
        <Slider {...settings} arrows={false}>
          {skills.map((obj, index) => (
            <div key={index} className={style.card}>
              <div >
              <img className={style.img} src={obj.image} alt="tech skill" />
              </div>
              <p className={style.name}>{obj.name}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
      <Footer className={style.footer}></Footer>
    </div>
  );
}

export default Skills;
