import React from "react";
import Moment from 'react-moment';
import BlogData from '~data/posts.json';
import StackedBasic from './Basic'
import Section from '~components/section'

const StackedMediaObject = (props) => (
    <article className={"card" + (props.cssClasses ? " " + props.cssClasses:"")}>
        <div className="card__image">
            <a href="#blog-detail">
                <img src={"/blog-wide/" + props.id + ".jpg"} alt={props.title} />
            </a>
        </div>
        <div className="card__content">
            <div className="card__topic">{props.topic}</div>
            <header className="card__header">
                <h4 className="card__title" title={props.title}>
                    <a href="#blog-detail">{props.title}</a>
                </h4>
            </header>
            <p className="card__text">{props.text}</p>
            <footer className="card__footer">
                <div className="card__author">by {props.author}</div>
                <div className="card__date">
                    <Moment fromNow>{props.date}</Moment>
                </div>
            </footer>
        </div>
    </article>
)
export default StackedMediaObject

export const StackedMediaObjectList = (props) => (
    <Section title="Media Object">
        <div className="cards cards--stacked">
            {BlogData.slice(0,3).map((post) => (
                <StackedBasic
                    key={post.id}
                    cssClasses="card--expand card--hover-fade show-1-3"
                    id={post.id}
                    title={post.title}
                    topic={post.topic}
                    text={post.text}
                    author={post.author}
                    date={post.date}
                />
            ))}
        </div>
    </Section>
)
