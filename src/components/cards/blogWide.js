import React from "react"
import BlogData from '../../data/posts.json';

const BlogWide = () => (
    <section className="l-cards container">
        <div className="l-cards__heading">
            <h4>Cards + Blog Posts Wide </h4>
        </div>
        <div className="cards">
            {BlogData.slice(0,1).map((post) => (
                <article key={post.id} className="card card--wide show-1-1">
                    <a href="#blog-detail">
                        <figure className="card__media">
                            <img src={"/800627/" + post.id + ".jpg"} alt={post.title} className="card__image" />
                        </figure>
                        <div className="card__body">
                            <div className="card__category">
                                {post.category}
                            </div>
                            <div className="card__title" title={post.title}>
                                <span>{post.title}</span>.
                            </div>
                            <p className="card__text">{post.excerpt}</p>
                        </div>
                    </a>
                </article>
            ))}
        </div>
    </section>
)

export default BlogWide
