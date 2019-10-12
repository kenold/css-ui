import React from "react"

const MinimalThemed = (props) => (
    <article className={"card card--minimal-themed " + props.theme + (props.cssClasses ? " " + props.cssClasses:"")}>
        <div className="card__content">
            <div className="card__topic">{props.topic}</div>
            <header className="card__header">
                <h4 className="card__title" title={props.title}>
                    <a href="#blog-detail">
                        {props.shortTitle}
                    </a>
                </h4>
            </header>
            <p className="card__text">{props.title}</p>
            <a href="#blog-detail">
            <footer className="card__footer">
                <span>{props.cta}</span>
                <span>&gt;</span>
            </footer></a>
        </div>
    </article>
)
export default MinimalThemed
