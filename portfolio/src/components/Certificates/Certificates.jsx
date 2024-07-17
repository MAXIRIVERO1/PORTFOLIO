import React, { useState } from 'react';
import style from "./Certificates.module.css";
import { Link } from "react-router-dom";
import henry from "./henry.jpg";
import efSet from "./efSet.jpg";
import nodeYexpress from "./nodeYexpress.jpg";
import mongoDB from "./mongoDB.jpg";
import Footer from '../Footer/Footer';

const certificates = [
    {
        link: "https://certificates.soyhenry.com/new-cert?id=b92d38572a22aa4f5c50a8e6c657003c3cec6fcc8aa7f472ddde947d4049a3ee",
        img: henry,
        alt: "certificate",
        text: "Full Stack Developer",
    },
    {
        link: "https://www.efset.org/cert/dTkVmL",
        img: efSet,
        alt: "certificate",
        text: "EF SET",
    },
    {
        link: "https://videocursos.co/verificacion/733D689C99-150FA8FAB-12D279304/",
        img: nodeYexpress,
        alt: "certificate",
        text: "Node.js y Express",
    },
    {
        link: "https://platzi.com/p/maximilianoa.castillorivero/curso/4987-mongodb/diploma/detalle/",
        img: mongoDB,
        alt: "certificate",
        text: "MongoDB",
    }
];

const Certificates = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const certificatesPerPage = 3;
    const totalPages = Math.ceil(certificates.length / certificatesPerPage);

    const indexOfLastCertificate = currentPage * certificatesPerPage;
    const indexOfFirstCertificate = indexOfLastCertificate - certificatesPerPage;
    const currentCertificates = certificates.slice(indexOfFirstCertificate, indexOfLastCertificate);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(
                <div
                    key={i}
                    onClick={() => paginate(i)}
                    className={`${style.pageNumber} ${currentPage === i ? style.active : style.inactive}`}
                >
                    {i}
                </div>
            );
        }
        return pageNumbers;
    };

    return (
        <div>
            <div className={style.nav}>
                <Link to={"/"}><button className={style.button}>BACK</button></Link>
            </div>
            <div className={style.contenedor}>
                {currentCertificates.map((cert, index) => (
                    <div key={index} className={style.card}>
                        <Link target="_blank" to={cert.link}>
                            <img className={style.img} src={cert.img} alt={cert.alt} />
                        </Link>
                        <br />
                        <a className={style.text} target="_blank" href={cert.link}>{cert.text}</a>
                    </div>
                ))}
            </div>
            <div className={style.pagination}>
                <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
                    Previous
                </button>
                {renderPageNumbers()}
                <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages}>
                    Next
                </button>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Certificates;

