import React from "react";
import BlogData from '../../data/posts.json';

const HorizontalFlipped = () => (
    <section className="l-cards l-cards--wide l-cards--wide--reverse">
        {/* RIGHT TO LEFT */}
        <div className="container">
            {BlogData.slice(1,2).map((post) => (
                <article key={post.id} className="card card--wide card--wide--reverse show-1-1">
                    <a href="#blog-detail">
                        <figure className="card__media">
                            <img src="/misc/shopping-cart-colour-400px.png" alt={post.title} className="card__image" />
                        </figure>
                        <div className="card__body">
                            <div className="card__category">
                                {post.category}
                            </div>
                            <div className="card__title" title={post.title}>
                                <span>{post.title}</span>.
                            </div>
                            <p className="card__text">{post.excerpt}</p>
                            <div className="btn__primary">Learn more</div>
                        </div>
                    </a>
                </article>
            ))}
        </div>
    </section>
)

export default HorizontalFlipped
