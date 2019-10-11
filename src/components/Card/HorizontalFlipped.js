import React from "react";
import BlogData from '../../data/posts.json';

const HorizontalFlipped = () => (
    <section className="l-cards l-cards--horizontal l-cards--horizontal--reverse">
        {/* RIGHT TO LEFT */}
        <div className="container">
            {BlogData.slice(1,2).map((post) => (
                <article key={post.id} className="card card--horizontal card--horizontal--reverse show-1-1">
                    <div className="card__image">
                        <a href="#blog-detail">
                            <img src="/misc/shopping-cart-colour-400px.png" alt={post.title} />
                        </a>
                    </div>
                    <div className="card__content">
                        <div className="card__topic">
                            {post.topic}
                        </div>
                        <header className="card__header">
                            <h2 className="card__title" title={post.title}>
                                <a href="#blog-detail">{post.title}.</a>
                            </h2>
                        </header>
                        <p className="card__text">{post.text}</p>
                        <a href="#blog-detail">
                            <div className="btn btn--primary">Learn more</div>
                        </a>
                    </div>
                </article>
            ))}
        </div>
    </section>
)

export default HorizontalFlipped
