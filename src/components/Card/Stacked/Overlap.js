import React from "react";
import Moment from 'react-moment';
import BlogData from '~data/posts.json';
import Section from "~components/Section"

const StackedOverlap = (props) => (
    <article className={"card card--overlap" + (props.cssClasses ? " " + props.cssClasses:"")}>
        <div className="card__image">
            <a href="#blog-detail">
                <img src={"/blog/tall/" + props.id + ".jpg"} alt={props.title} />
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
                    <Moment fromNow>{props.date}</Moment>
                </div>
            </footer>
        </div>
    </article>
)
export default StackedOverlap

export const StackedOverlapList = (props) => (
    <Section title="Overlap">
        <div className="cards">
            {BlogData.slice(0,3).map((post) => (
                <StackedOverlap
                    key={post.id}
                    cssClasses="show-1-3"
                    id={post.id}
                    title={post.title}
                    date={post.date}
                />
            ))}
        </div>
    </Section>
)
