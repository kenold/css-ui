import React from "react"
import BlogCode from '../codes/blog';
import BlogData from '../../data/posts.json';

const Blog = () => (
    <section className="l-cards container">
        <div className="l-cards__heading">
            <h4>Cards + Blog Posts </h4>
        </div>

        <div className="cards">
            {BlogData.map((post) => (
                <article key={post.id} className="card card--blog show-2-4">
                    <a href="#">
                        <figure className="card__media">
                            <img src={"/blog/" + post.id + ".jpg"} alt={post.title} className="card__image" />
                        </figure>
                        <div className="card__body">
                            <div className="card__category">{post.category}</div>
                            <div className="card__title" title={post.title}>
                                <span>{post.title}</span>
                            </div>
                        </div>
                        <div className="card__footer">
                            <div className="card__author">{post.author}</div>
                            <div className="card__date">5 hours ago</div>
                        </div>
                    </a>
                </article>
            ))}
        </div>

        <div className="code">
            <BlogCode />
        </div>
    </section>
)

export default Blog
