import React from "react";
import { FaPlay, FaHeart, FaEllipsisV } from 'react-icons/fa';
import MovieData from '../../data/movies.json';

const Movie = () => (
    <section className="l-cards container">
        <div className="l-cards__heading">
            <h4>Cards Overlay + Movies</h4>
        </div>
        <div className="cards">
            {MovieData.map((movie) => (
                <article key={movie.id} className="card card--overlay grid-3">
                    <a href="#">
                        <figure className="card__media">
                            <img src={"/movies/" + movie.id + ".jpg"} alt="movie.title" className="card__image" />
                        </figure>
                        <div className="darken"></div>
                    </a>
                    <div className="card__body">
                        <div className="separator"></div>
                        <div className="card__title" title={movie.title}>
                            {movie.title}
                        </div>
                        <div className="card__text">{movie.excerpt}</div>
                        <ul className="card__actions cta">
                            <li className="cta__play"><a href="#"><FaPlay /> Play</a></li>
                            <li className="cta__favorite"><a href="#"><FaHeart /> Favorite</a></li>
                            <li className="cta__more"><a href="#"><FaEllipsisV /></a></li>
                        </ul>
                    </div>
                </article>
            ))}
        </div>
    </section>

)

export default Movie
