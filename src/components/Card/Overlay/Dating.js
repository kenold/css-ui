import React from "react";
import { FaTimes, FaHeart } from 'react-icons/fa';

const Dating = (props) => (
    <article className={"card card--overlay card--overlay--dating" + (props.cssClasses ? " " + props.cssClasses:"")}>
        <div className="card__image">
            <a href="#profile" title={props.title}>
                <img src={"/models/" + props.id + ".jpg"} alt={props.name} />
            </a>
        </div>
        <div className="darken"></div>
        <div className="card__content">
            <div className="card__title model" title={props.name}>
                <a href="#profile" className="model__link">
                    <span className="model__name">{props.name}, </span>
                    <span className="model__age">{props.age}</span>
                </a>
            </div>
            <div className="card__text">{props.text}</div>
            <div className="card__actions swipe">
                <a href="#dislike" title="Dislike">
                    <div className="swipe__left"><FaTimes /></div>
                </a>
                <a href="#like" title="Like">
                    <div className="swipe__right"><FaHeart /></div>
                </a>
            </div>
        </div>
    </article>
)
export default Dating
