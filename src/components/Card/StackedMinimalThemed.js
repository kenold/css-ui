import React from "react"
// import BlogCode from '../codes/blog';
import BlogData from '../../data/posts.json';

const StackedMinimalThemed = () => (
    <section className="l-cards l-cards--minimal-themed container">
        <div className="l-cards__heading">
            <h4>Minimal Themed</h4>
        </div>

        <div className="cards">
            {BlogData.slice(0, 3).map((post) => (
                <article key={post.id} className={"card card--minimal--themed " + post.theme + " show-1-3 no-gap"}>
                    <div className="card__content">
                        <div className="card__topic">{post.topic}</div>
                        <header className="card__header">
                            <h4 className="card__title" title={post.title}>
                                <a href="#blog-detail">
                                    {post.shortTitle}
                                </a>
                            </h4>
                        </header>
                        <p className="card__text">{post.title}</p>
                        <a href="#blog-detail">
                        <footer className="card__footer">
                            <span>{post.cta}</span>
                            <span>&gt;</span>
                        </footer></a>
                    </div>
                </article>
            ))}
        </div>

        <div className="code">

        </div>
    </section>
)

export default StackedMinimalThemed
