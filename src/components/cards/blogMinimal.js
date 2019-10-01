import React from "react"
import BlogCode from '../codes/blog';
import BlogData from '../../data/posts.json';

const BlogMinimal = () => (
    <section className="l-cards l-cards--minimal container">
        <div className="l-cards__heading">
            <h4>Cards + Blog Minimal </h4>
        </div>

        <div className="cards">
            {BlogData.slice(0, 3).map((post) => (
                <article key={post.id} className="card card--minimal show-1-3">
                    <a href="#">
                        <div className="card__body">
                            <div className="card__category">{post.category}</div>
                            <div className="card__title" title={post.title}>
                                <span>{post.title}</span>
                            </div>
                        </div>
                    </a>
                </article>
            ))}
        </div>

        <div className="code">

        </div>
    </section>
)

export default BlogMinimal
