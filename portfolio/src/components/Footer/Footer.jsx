import React from 'react';
import style from './Footer.module.css';

function Footer() {
  return (
        <footer className={style.footer}>
            <div className={style.blackback}>
          <p>&copy; 2023 Alfredo Maximiliano Castillo. Todos los derechos reservados.</p>
            </div>
        </footer>
    
    );
}

export default Footer;
