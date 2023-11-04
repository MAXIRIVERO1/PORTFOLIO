import React from 'react'
import foto from "./maxiB&W.jpg"
import style from "./home.module.css"
import BurguerMenu from "../BurgerMenu/BurgerMenu"
import Swal from 'sweetalert2';


function Home() {
  const phoneNumber = '+543876312803';
  const copyToClipboard = () => {
    const input = document.createElement('input');
    input.value = phoneNumber;
    document.body.appendChild(input);

    input.select();
    document.execCommand('copy');

    document.body.removeChild(input);
    Swal.fire({
      title: '¡Muy bien!',
      text: 'Número de teléfono copiado al portapapeles',
      icon: 'info',
      confirmButtonText: 'Entendido',
    });
  };
  return (
    <div>
      <div className={style.menu}>
      <BurguerMenu></BurguerMenu>
      </div>
    <div className={style.contenedor}>
      <div className={style.card}>
        <h1>Alfredo Maximiliano Castillo(MAXI)</h1>
        <h2>Full Stack Developer💻</h2>
        <img className={style.img} src={foto} alt="" /><br/>
        <button onClick={copyToClipboard} className={style.button}>📞+543876312803</button>
      </div>
    </div>
    </div>
  )
}

export default Home
