import { useState } from 'react';
import './App.css';
import './DavidMartinez.css';

export default function DavidMartinez(){

    const [mostrar, setMostrar] = useState(true);

    const beneficios = [
        {
            title: 'Disfruta en tu TV',
            description: 'Ve en smart TV, PlayStation, Xbox, Chromecast, Apple TV, reproducciones de Blu Ray y más',
            image: 'https://cdn-icons-png.flaticon.com/512/1941/1941819.png',
            alt: 'Tv'
        },
        {
            title: 'Descarga tus series para verlas Offline',
            description: 'Guarda tu contenido favorito y siempre tendrás algo para ver',
            image: 'https://cdn-icons-png.flaticon.com/512/1159/1159628.png',
            alt: 'Descarga'
        },
        {
            title: 'Disfruta donde quieras',
            description: 'Peliculas y series ilimitadas en tu telefono, tablet, laptop y TV',
            image: 'https://cdn-icons-png.flaticon.com/512/215/215518.png',
            alt: 'Dispositivos'
        },
        {
            title: 'Crea perfiles para niños',
            description: 'Los niños vivirán aventuras con sus personajes favoritos en un espacio diseñado exclusivamente para ellos',
            image: 'https://cdn-icons-png.flaticon.com/512/6378/6378141.png',
            alt: 'Perfil para niños'
        }
    ]

    return(
        <section className="beneficios">
            <h2>¡Más motivos para unirte!</h2>
                <button 
                    className="boton-beneficios"
                    onClick={() => setMostrar(!mostrar)}
                >
                {mostrar ? "Ocultar beneficios" : "Mostrar beneficios"}</button>

            {mostrar ? (
                <div className="beneficio-cards">
                    {beneficios.map((beneficio, index) => (
                        <div className="card-beneficio" key={index}>
                            <h3>{beneficio.title}</h3>
                            <p>{beneficio.description}</p>
                            <img src={beneficio.image} alt={beneficio.alt}/>
                        </div>
                    ))}
                </div>
            ) : null}
        </section>
    )
}