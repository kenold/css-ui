import React from "react";
import Moment from 'react-moment';
// import BlogCode from '../codes/blog';
import BlogData from '../../data/posts.json';

const StackedLabel = () => (
    <section className="l-cards container">
        <div className="l-cards__heading">
            <h4>Card: Stacked + Label </h4>
        </div>

        <div className="cards">
            {BlogData.slice(0, 4).map((post) => (
                <article key={post.id} className="card card--label show-1-4">
                    <a href="#blog-detail">
                        <figure className="card__media">
                            <img src={"/blog-wide/" + post.id + ".jpg"} alt={post.title} className="card__image" />
                            <div className="card__label">{post.topic}</div>
                        </figure>
                    </a>
                        <div className="card__body">
                            <a href="#blog-detail">
                                <h4 className="card__title" title={post.title}>{post.title}</h4>
                            </a>
                        </div>
                        <div className="card__footer">
                            <div className="card__date">
                                <Moment format="MMM D YYYY">{post.date}</Moment>
                            </div>
                        </div>

                </article>
            ))}
        </div>

        <div className="code">

        </div>
    </section>
)

export default StackedLabel
