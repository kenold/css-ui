import React from "react";
import { FaPlay, FaHeart, FaEllipsisH } from 'react-icons/fa';
import MovieData from '../../data/movies.json';

const Movie = () => (
    <section className="l-cards l-cards--full container">
        <div className="l-cards__heading">
            <h4>Cards Overlay + Movies</h4>
        </div>
        <div className="cards">
            {MovieData.map((movie) => (
                <article key={movie.id} className="card card--overlay show-1-3">
                    <a href="#movie-detail" title={movie.title}>
                        <figure className="card__media">
                            <img src={"/movies/" + movie.id + ".jpg"} alt={movie.title} className="card__image" />
                        </figure>
                        <div className="darken"></div>
                        {movie.isStreaming &&
                            <div className="card__notification">Now Streaming</div>
                        }
                    </a>
                        <div className="card__body">
                            <div className="separator"></div>
                            <a href="#movie-detail">
                                <div className="card__title" title={movie.title}>
                                    {movie.title}
                                </div>
                                <div className="card__text">{movie.excerpt}</div>
                            </a>
                            <ul className="card__actions btn">
                                <li className="btn__primary"><a href="#play" title="Play"><span className="icon"><FaPlay /></span> Play</a></li>
                                <li className="btn__secondary"><a href="#favorite" title="Favorite"><span className="icon"><FaHeart /></span> Favorite</a></li>
                                <li className="btn__more"><a href="#more" title="More Info"><span className="icon"><FaEllipsisH /></span></a></li>
                            </ul>
                        </div>

                </article>
            ))}
        </div>
    </section>

)

export default Movie
