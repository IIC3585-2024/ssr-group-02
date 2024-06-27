import React from 'react';
import './Series.css';
import { useRouter } from 'next/navigation';

export default function Series({ serie }) {
    const url = `/serie/${serie.id}`;
    return (
            <div className="movie" > 
            <a className="redirect" href={url}>
                    <h3>{serie.name}</h3>
                    <p>Servicio de Streaming: {serie.service}</p>
                    <p>Descripción: {serie.description}</p>
                    <p>Estrellas: {serie.promedioEstrellas.toFixed(1)} ({serie.numCalificaciones})</p>
                </a>
            </div>
    );
};