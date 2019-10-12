import React from "react";
import { FaPlay, FaHeart, FaEllipsisH } from 'react-icons/fa';
import Section from '~components/section'
import MovieData from '~data/movies.json';

const OverlayMovie = (props) => (
    <article className={"card card--overlay" + (props.cssClasses ? " " + props.cssClasses:"")}>
        <div className="card__image">
            <a href="#movie-detail" title={props.title}>
                <img src={"/movies/" + props.id + ".jpg"} alt={props.title} />
            </a>
        </div>
        <div className="darken"></div>
        {props.isStreaming &&
            <div className="card__notification">Now Streaming</div>
        }
        <div className="card__content">
            <div className="separator"></div>
            <h4 className="card__title" title={props.title}>
                <a href="#movie-detail">{props.title}</a>
            </h4>
            <p className="card__text">{props.text}</p>
            <div className="card__actions">
                <a href="#play" title="Play">
                    <div className="btn btn--primary">
                        <span className="icon"><FaPlay /></span>
                        <span className="btn__text">Play</span>
                    </div>
                </a>
                <a href="#favorite" title="Favorite">
                    <div className="btn btn--secondary">
                        <span className="icon"><FaHeart /></span>
                        <span className="btn__text">Favorite</span>
                    </div>
                </a>
                <a href="#more" title="More Info">
                    <div className="btn btn--ellipsis">
                        <span className="icon"><FaEllipsisH /></span>
                    </div>
                </a>
            </div>
        </div>
    </article>
)
export default OverlayMovie

export const OverlayMovieList = () => (
    <Section title="Overlay + Movie">
        <div className="cards">
            {MovieData.map((movie) => (
                <OverlayMovie
                    key={movie.id}
                    cssClasses="show-1-3"
                    id={movie.id}
                    title={movie.title}
                    isStreaming={movie.isStreaming}
                    text={movie.text}
                />
            ))}
        </div>
    </Section>
)
