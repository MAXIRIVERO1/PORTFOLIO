import React, { useState } from 'react'
import style from "./Projects.module.css"
import { Link } from "react-router-dom"
import food from "./food.jpg"
import portfolio from "./portfolio.jpg"
import xul from "./xul.jpg"
import comingsoon from "./comingsoon.jpg"
import Footer from '../Footer/Footer'
import HeaderBack from '../HeaderBack/HeaderBack'
import RyM from "./rickCapture.png"
import notes from "./notesCapture.png"
import python from "./python.png"
import api from "./apiProjects.png";

const projects = [
    {
        title: "Foods",
        img: food,
        alt: "project",
        github: "https://github.com/MAXIRIVERO1/FOODS",
        detail: "/detail/FOODS",
    },
    {
        title: "Portfolio",
        img: portfolio,
        alt: "project",
        github: "https://github.com/MAXIRIVERO1/PORTFOLIO",
        detail: "/detail/PORTFOLIO",
    },
    {
        title: "Xul",
        img: xul,
        alt: "project",
        youtube: "https://www.youtube.com/watch?v=BGJdh_8pxvo",
        detail: "/detail/XUL",
    },
    {
        title: "Rick and Morty",
        img: RyM,
        alt: "rickAndMorty",
        youtube: "https://youtu.be/djDfqMMiR6Y",
        detail: "/detail/rickAndMorty",
    },
    {
        title: "Notes",
        img: notes,
        alt: "notes",
        youtube: "https://www.youtube.com/watch?v=OlxFev6mIFM",
        detail: "/detail/notes",
    },
    {
        title: "User Management API with FastAPI",
        img: python,
        alt: "PythonApi",
        youtube: "https://www.youtube.com/watch?v=ziJheF4U13w",
        detail: "/detail/pythonCrud",
    },
    {
        title: "Task Management API",
        img: api,
        alt: "apiProjects",
        youtube: "https://www.youtube.com/watch?v=sIulvqc4cfo",
        detail: "/detail/taskApi"
    },
    {
        title: "Contact Management API",
        img: api,
        alt: "apiProjects",
        youtube: "https://www.youtube.com/watch?v=06AJaNk1UH0",
        detail: "/detail/contactApi"
    },
    {
        title: "Product Inventory API",
        img: api,
        alt: "apiProjects",
        youtube: "https://www.youtube.com/watch?v=2Px6ybV44MI",
        detail: "/detail/productInventory"
    },
    {
        title: "User authentication API",
        img: api,
        alt: "apiProjects",
        youtube: "https://www.youtube.com/watch?v=VQxq8e_hea0",
        detail: "/detail/userAuthApi"
    },
    {
        title: "Book User authentication API",
        img: api,
        alt: "apiProjects",
        youtube: "https://www.youtube.com/watch?v=EE1KH-moIuw",
        detail: "/detail/bookUserApi"
    },
    {
        title: "Coming Soon",
        img: comingsoon,
        alt: "project",
    },
];



function Projects() {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentProjects = projects.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(projects.length / itemsPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

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
            <HeaderBack path="/"></HeaderBack>
            <div className={style.contenedor}>
                {currentProjects.map((project, index) => (
                    <div className={style.card} key={index}>
                        <Link target="_blank" to={project.github || project.youtube || project.browser || "#"}>
                            <img className={style.img} src={project.img} alt={project.alt} />
                        </Link><br />
                        {project.github && (
                            <a className={style.text} target="_blank" href={project.github}>Check on GitHub</a>
                        )}
                        {project.youtube && (
                            <a className={style.text} target="_blank" href={project.youtube}>Check on Youtube</a>
                        )}
                        {project.browser && (
                            <a className={style.text} target="_blank" href={project.browser}>Check on Browser</a>
                        )}
                        <br />
                        {project.detail && (
                            <Link className={style.text} to={project.detail}>{project.title + " Detail"}</Link>
                        )}
                        {!project.detail && (
                            <p className={style.text}>{project.title}</p>
                        )}
                    </div>
                ))}
            </div>
            <div className={style.pagination}>
                <button onClick={handlePreviousPage} disabled={currentPage === 1}>Previous</button>
                {renderPageNumbers()}
                <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Projects;
