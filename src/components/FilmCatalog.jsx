import "./FilmCatalog.css";
import React, { useState, useEffect } from 'react';

function FilmCatalog() {
    const [movies, setMovies] = useState([]);
  
    const fetchMovies = async () => {
      try {
        const response = await fetch('https://swapi.dev/api/films');
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.log('Ocorreu um erro ao buscar os dados da API:', error);
      }
    };
  
    useEffect(() => {
      fetchMovies();
    }, []);
  
    return (
        <div className="film-catalog">
                <h1>movies star wars</h1>
            <div className="film-grid">
                {movies.map((movie) => (
                    <div key={movie.episode_id} className="film-item">
                        <h2>{movie.title}</h2>
                        <p className="perspective">{movie.opening_crawl}</p>
                        <p>{movie.release_date}</p>
                    </div>
                ))}
            </div>
        </div>
    );
  }

export default FilmCatalog;