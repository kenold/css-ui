import React from "react";
import Moment from 'react-moment';

const Badge = (props) => (
    <article className={"card card--badge" + (props.cssClasses ? " " + props.cssClasses:"")}>
        <div className="card__image">
            <a href="#blog-detail">
                <img src={"/blog-wide/" + props.id + ".jpg"} alt={props.title} />
                <div className="card__topic">{props.topic}</div>
            </a>
        </div>
        <div className="card__content">
            <header className="card__header">
                <h4 className="card__title" title={props.title}>
                    <a href="#blog-detail">{props.title}</a>
                </h4>
            </header>
            <footer className="card__footer">
                <div className="card__date">
                    <Moment format="MMM D YYYY">{props.date}</Moment>
                </div>
            </footer>
        </div>
    </article>
)

export default Badge