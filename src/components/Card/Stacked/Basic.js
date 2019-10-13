import React from "react";
import Moment from 'react-moment';
import BlogData from "~data/posts.json";
import Section from "~components/section"

const StackedBasic = (props) => (
    <article className={"card" + (props.cssClasses ? " " + props.cssClasses:"")}>
        <div className="card__image">
            <a href="#blog-detail">
                <img src={"/blog-wide/" + props.id + ".jpg"} alt={props.title} />
            </a>
        </div>
        <div className="card__content">
            <header className="card__header">
                <div className="card__topic">{props.topic}</div>
                <h4 className="card__title" title={props.title}>
                    <a href="#blog-detail">{props.title}</a>
                </h4>
            </header>
            <div className="card__text">{props.text}</div>
            <footer className="card__footer">
                <div className="card__author">by {props.author}</div>
                <div className="card__date">
                    <Moment fromNow>{props.date}</Moment>
                </div>
            </footer>
        </div>
    </article>
)
export default StackedBasic

export const StackedBasicList = () => (
    <Section title="Stacked" cssClasses="l-cards--stacked-basic">
        <div className="cards">
            {BlogData.slice(0,3).map((post) => (
                <StackedBasic
                    key={post.id}
                    cssClasses="show-1-3"
                    id={(post.id) + 8}
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
