import React from "react"
import Section from '../../../components/Section'
import BlogData from '~data/posts.json';

const StackedMinimalThemed = (props) => (
    <article className={"card card--minimal-themed "
                        + props.theme
                        + (props.cssClasses ? " " + props.cssClasses:"")}>
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
export default StackedMinimalThemed

export const StackedMinimalThemedList = () => (
    <Section title="Minimal Themes">
        <div className="cards">
            {BlogData.slice(0, 3).map((post) => (
                <StackedMinimalThemed
                    key={post.id}
                    cssClasses="show-1-3 no-gap"
                    title={post.title}
                    topic={post.topic}
                    shortTitle={post.shortTitle}
                    cta={post.cta}
                    theme={post.theme}
                />
            ))}
        </div>
    </Section>
)