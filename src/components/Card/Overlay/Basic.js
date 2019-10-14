import React from "react";
import Section from '~components/section'
import PostData from '~data/posts.json';

const OverlayBasic = (props) => (
    <article className={"card card--overlay" + (props.cssClasses ? " " + props.cssClasses:"")}>
        <div className="card__image">
            <a href="#post-detail" title={props.title}>
                <img src={"/blog/tall/" + props.id + ".jpg"} alt={props.title} />
            </a>
        </div>
        <div className="darken"></div>
        <div className="card__content">
            <h4 className="card__title" title={props.title}>
                <a href="#movie-detail">{props.title}</a>
            </h4>
            <p className="card__text">{props.text}</p>
        </div>
    </article>
)
export default OverlayBasic

export const OverlayBasicList = () => (
    <Section title="Overlay" cssClasses="l-cards--overlay">
        <div className="cards">
            {PostData.slice(0,3).map((movie) => (
                <OverlayBasic
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
