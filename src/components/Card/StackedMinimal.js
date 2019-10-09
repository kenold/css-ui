import React from "react"
// import BlogCode from '../codes/blog';
import BlogData from '../../data/posts.json';

const StackedMinimal = () => (
    <section className="l-cards l-cards--minimal container">
        <div className="l-cards__heading">
            <h4>Minimal </h4>
        </div>

        <div className="cards">
            {BlogData.slice(0, 3).map((post) => (
                <article key={post.id} className="card card--minimal show-1-3">
                    <div className="card__content">
                        <div className="card__topic">{post.topic}</div>
                        <header className="card__header">
                            <h4 className="card__title" title={post.title}>
                                <a href="#blog-detail">
                                    <span>{post.title}</span>
                                </a>
                            </h4>
                        </header>
                    </div>
                </article>
            ))}
        </div>

        <div className="code">

        </div>
    </section>
)

export default StackedMinimal
