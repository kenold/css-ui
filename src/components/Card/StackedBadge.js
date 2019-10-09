import React from "react";
import Moment from 'react-moment';
// import BlogCode from '../codes/blog';
import BlogData from '../../data/posts.json';

const StackedBadge = () => (
    <section className="l-cards container">
        <div className="l-cards__heading">
            <h4>Stacked &rarr; Label</h4>
        </div>

        <div className="cards">
            {BlogData.slice(0, 3).map((post) => (
                <article key={post.id} className="card card--label show-1-3">
                    <div className="card__image">
                        <a href="#blog-detail">
                            <img src={"/blog-wide/" + (post.id+4) + ".jpg"} alt={post.title} />
                            <div className="card__label">{post.topic}</div>
                        </a>
                    </div>
                    <div className="card__content">
                        <header className="card__header">
                            <h4 className="card__title" title={post.title}>
                                <a href="#blog-detail">{post.title}</a>
                            </h4>
                        </header>
                        <footer className="card__footer">
                            <div className="card__date">
                                <Moment format="MMM D YYYY">{post.date}</Moment>
                            </div>
                        </footer>
                    </div>
                </article>
            ))}
        </div>
    </section>
)

export default StackedBadge
