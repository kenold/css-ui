import React from "react";
import { FaPlay } from 'react-icons/fa';

const BadgeVideo = (props) => (
    // TODO: Rename video-hover class
    <article className={"card card--video-hover" + (props.cssClasses ? " " + props.cssClasses:"")}>
        <div className="card__image">
            <a href="#video-detail">
                <img src={"/videos/" + props.id + ".jpg"} alt={props.title} />
                <div className="card__badge card__badge--right">{props.duration}</div>
                <div className="card__icon"><FaPlay /></div>
            </a>
        </div>
        <div className="card__content">
            <header className="card__header">
                <h4 className="card__title" title={props.title}>
                    {props.title}
                </h4>
            </header>
        </div>
    </article>
)
export default BadgeVideo
