import React from "react";
import { FaMapMarkerAlt } from 'react-icons/fa';

const Tour = (props) => (
    <article className={"card" + (props.cssClasses ? " " + props.cssClasses:"")}>
        <div className="card__image">
            <a href="#tour-detail">
                <img src={"/tours/" + props.id + ".jpg"} alt={props.title} />
            </a>
        </div>
        <div className="card__content">
            <div className="card__topic">
                <FaMapMarkerAlt /> {props.topic}
            </div>
            <header className="card__header">
                <h4 className="card__title" title={props.title}>
                    <a href="#tour-detail">{props.title}</a>
                </h4>
            </header>
            <p className="card__text card__text--small">{props.text}</p>
            <div className="card__subtext"><span>from</span> ${props.price}</div>
        </div>
    </article>
)
export default Tour
