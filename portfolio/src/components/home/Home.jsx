import React from 'react'
import foto from "../../assets/perfilPortfolio.jpeg"
import style from "./home.module.css"
import BurguerMenu from "../BurgerMenu/BurgerMenu.jsx"
import Swal from 'sweetalert2';
import Footer from "../Footer/Footer.jsx"


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
            title: '¡Copied!',
            text: 'Número de teléfono copiado al portapapeles',
            icon: 'info',
            confirmButtonText: 'OK',
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
                    <img className={style.img} src={foto} alt="" /><br />
                    <button onClick={copyToClipboard} className={style.buttonCopy}>📞Copy Telephone Number</button>
                    <button onClick={() => window.open("https://drive.google.com/file/d/1GpjSKek-DEtessmdJouZVEriPh7EmyFY/view?usp=sharing", "_blank")} className={style.buttonCopy}>💼Check my CV</button>
                    <button onClick={() => window.open("mailto:maximilianoa.castillorivero@gmail.com", "_blank")} className={style.buttonCopy}>✉️Send Email</button>
                    <button onClick={() => window.open("https://www.linkedin.com/in/maximiliano-developer", "_blank")} className={style.buttonCopy}>🔗Linkedin Profile</button>
                    <button onClick={() => window.open("https://github.com/MAXIRIVERO1", "_blank")} className={style.buttonCopy}>🐙GitHub Profile</button>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Home
