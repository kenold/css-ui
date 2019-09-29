import React from "react"
import BlogCode from '../codes/blog';
import BlogData from '../../data/posts.json';

const Minimal = () => (
    <section className="l-cards l-cards--minimal container">
        <div className="l-cards__heading">
            <h4>Cards + Minimal </h4>
        </div>

        <div className="cards">
            {BlogData.map((post) => (
                <article key={post.id} className="card card--minimal show-1-3">
                    <a href="#">
                        <div className="card__body">
                            <div className="card__category">{post.category}</div>
                            <div className="card__title" title={post.title}>
                                <span>{post.title}</span>
                            </div>
                        </div>
                        <div className="card__footer">
                            <a href="#">
                                <div className="card__cta">Learn more</div>
                            </a>
                        </div>
                    </a>
                </article>
            ))}
        </div>

        <div className="code">

        </div>
    </section>
)

export default Minimal
