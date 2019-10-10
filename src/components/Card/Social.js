import React, { Component } from "react";
import Moment from 'react-moment';
import { FaThumbsDown, FaThumbsUp, FaRegCommentAlt, FaEllipsisV } from 'react-icons/fa';
import BlogData from '../../data/posts.json';

class Social extends Component {
    render() {
        return (
            <section className="l-cards container">
                <div className="l-cards__heading">
                    <h4>Stacked + Social</h4>
                </div>

                <div className="cards">
                    {BlogData.slice(0,3).map((post) => (
                        <article key={post.id} className="card card--social show-1-3">
                            <header className="card__header user">
                                <div className="user__avatar">
                                    <img src={"/avatars/" + post.id + ".jpg"} />
                                </div>
                                <div className="username-date">
                                    <div className="user__name">
                                            <a href="#profile">{post.author}</a>
                                    </div>
                                    <div className="card__date">Yesterday at 12:31 PM</div>
                                </div>
                                <div className="more-link"><FaEllipsisV /></div>
                            </header>
                            <div className="card__content">
                                <div className="card__text">{post.text}</div>
                            </div>
                            <div className="card__image">
                                <a href="#blog-detail">
                                    <img src={"/blog-wide/" + (post.id+8) + ".jpg"} alt={post.title} />
                                </a>
                            </div>
                            <footer className="card__footer">
                                <div className="ratings">
                                    <div className="rating__down">
                                        <a href="#dislike"><FaThumbsDown /></a>
                                    </div>
                                    <div className="rating__up">
                                        <a href="#like"><FaThumbsUp /></a>
                                    </div>
                                </div>
                                <div className="comments"><FaRegCommentAlt /></div>
                            </footer>
                        </article>
                    ))}
                </div>
            </section>
        )
    }
}

export default Social
