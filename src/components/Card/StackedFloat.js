import React from "react";
import { FaPlay } from 'react-icons/fa';
import MovieData from '../../data/movies.json';

const StackedFloat = () => (
    <section className="l-cards container">
        <div className="l-cards__heading">
            <h4>Stacked &rarr; Floating Icon</h4>
        </div>

        <div className="cards">
            {MovieData.slice(0, 3).map((movie) => (
                <article key={movie.id} className="card card--float show-1-3">
                    <div className="card__image">
                        <img src={"/movies/" + (movie.id) + ".jpg"} alt={movie.title} />
                        <a href="#action" className="card__icon-link btn__circle btn__circle--float-rb">
                            <div className="card__icon"><FaPlay /></div>
                        </a>
                    </div>
                    <div className="card__content">
                        <div className="card__topic">{movie.topic}</div>
                        <header className="card__header">
                            <h4 className="card__title" title={movie.title}>
                                <a href="#blog-detail">{movie.title}</a>
                            </h4>
                            <p className="card__text">{movie.synopsis}</p>
                        </header>
                        <div className="card__text">{movie.synosis}</div>
                    </div>
                </article>
            ))}
        </div>
    </section>
)

export default StackedFloat
