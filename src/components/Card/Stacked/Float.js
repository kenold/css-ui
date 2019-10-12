import React from "react";
import { FaPlay } from 'react-icons/fa';
import Button from "~components/Button/Icon";

const Float = (props) => (
    <article className={"card card--float" + (props.cssClasses ? " " + props.cssClasses:"")}>
        <div className="card__image">
            <img src={"/movies/cropped/" + props.id + ".jpg"} alt={props.title} />
            <Button url="#play" type="circle"><FaPlay /></Button>
        </div>
        <div className="card__content">
            <div className="card__topic">{props.topic}</div>
            <header className="card__header">
                <h4 className="card__title" title={props.title}>
                    <a href="#blog-detail">{props.title}</a>
                </h4>
                <p className="card__text">{props.text}</p>
            </header>
            <div className="card__text">{props.synosis}</div>
        </div>
    </article>
)
export default Float
