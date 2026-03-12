import { useEffect, useState } from "react";
import "./DavidSarmiento.css";

export default function NavBar() {
    const [idioma, setIdioma] = useState("Español");
    const [logueado, setLogueado] = useState(false);
    const secciones = ["Inicio", "Series", "Peliculas", "Novedades"];

    const cambiarIdioma = () => {
        setIdioma((prev) => (prev === "Español" ? "English" : "Español"));
    };

    return (
        <>
        <nav className="navbar">
            <img 
            src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
            alt="Netflix"
            className="logo" 
            />
            <ul className="menu">
                {secciones.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <div className="buttons">
                <button className="btn" onClick={() => setLogueado(!logueado)}>
                    {logueado ? "Mi cuenta" : "Iniciar Sesión"}
                </button>
                <button className="btn2" onClick={cambiarIdioma}>
                    {idioma}
                </button>
            </div>
        </nav>
        </>
    )
}