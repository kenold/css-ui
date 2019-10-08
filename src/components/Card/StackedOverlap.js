import React, { Component } from "react";
import Moment from 'react-moment';
import BlogData from '../../data/posts.json';

class StackedOverlap extends Component {
    render() {
        return (
            <section className="l-cards container" id="stacked">
                <div className="l-cards__heading">
                    <h4>Card: Stacked &rarr; Overlap</h4>
                </div>

                <div className="cards">
                    {BlogData.slice(0,3).map((post) => (
                        <article key={post.id} className="card card--overlap show-1-3">
                            <div className="card__image">
                                <a href="#blog-detail">
                                    <img src={"/blog/tall/" + post.id + ".jpg"} alt={post.title} />
                                </a>
                            </div>
                            <div className="card__content">
                                <header className="card__header">
                                    <h4 className="card__title" title={post.title}>
                                        <a href="#blog-detail">{post.title}</a>
                                    </h4>
                                </header>
                                <footer className="card__footer">
                                    <div className="card__author">by {post.author}</div>
                                    <div className="card__date">
                                        <Moment fromNow>{post.date}</Moment>
                                    </div>
                                </footer>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        )
    }
}

export default StackedOverlap
