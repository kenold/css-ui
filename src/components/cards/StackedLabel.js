import React from "react"
// import BlogCode from '../codes/blog';
import BlogData from '../../data/posts.json';

const StackedLabel = () => (
    <section className="l-cards container">
        <div className="l-cards__heading">
            <h4>Cards + Blog Label </h4>
        </div>

        <div className="cards">
            {BlogData.slice(0, 3).map((post) => (
                <article key={post.id} className="card card--label show-1-3">
                    <a href="#blog-detail">
                        <figure className="card__media">
                            <img src={"/blog-wide/" + post.id + ".jpg"} alt={post.title} className="card__image" />
                            <div className="card__label">{post.category}</div>
                        </figure>
                        <div className="card__body">
                            <div className="card__title" title={post.title}>
                                <span>{post.title}</span>
                            </div>
                        </div>
                        <div className="card__footer">
                            <div className="card__date">5 hours ago</div>
                        </div>
                    </a>
                </article>
            ))}
        </div>

        <div className="code">

        </div>
    </section>
)

export default StackedLabel
