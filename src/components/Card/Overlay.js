import React from "react";
import { FaPlay, FaHeart, FaEllipsisH } from 'react-icons/fa';
import MovieData from '../../data/movies.json';

const Overlay = () => (
    <section className="l-cards l-cards--full container">
        <div className="l-cards__heading">
            <h4>Card: Overlay + Movie</h4>
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
                            <div className="card__actions btn">
                                <a href="#play" title="Play">
                                    <div className="btn__primary"><span className="icon"><FaPlay /></span> Play</div>
                                </a>
                                <a href="#favorite" title="Favorite">
                                    <div className="btn__secondary"><span className="icon"><FaHeart /></span> Favorite</div>
                                </a>
                                <a href="#more" title="More Info">
                                    <div className="btn__more"><span className="icon"><FaEllipsisH /></span></div>
                                </a>

                            </div>
                        </div>

                </article>
            ))}
        </div>
    </section>

)

export default Overlay
