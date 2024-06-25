import React from "react";
import './Header.css';

export default function Header() {
    return (
        <header>
            <h1>Recomendaciones Quiroz</h1>
            <div className="header-buttons">
                <a href="/">
                    <button className="header-button">Ver<br></br>Series</button>
                </a>
                <a href="/add-serie">
                    <button className="header-button">Agregar<br></br>Serie</button>
                </a>
                <a href="/logout">
                    <button className="header-button">Cerrar<br></br>Sesión</button>
                </a>
            </div>
        </header>
        
    );
}