import React, { Component } from "react";
import Moment from 'react-moment';
import { FaThumbsDown, FaThumbsUp, FaRegCommentAlt, FaEllipsisV } from 'react-icons/fa';
import SocialData from '../../data/social.json';

class Social extends Component {
    render() {
        return (
            <section className="l-cards container">
                <div className="l-cards__heading">
                    <h4>Stacked + Social</h4>
                </div>

                <div className="cards">
                    {SocialData.slice(0,3).map((post) => (
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
                                    <img src={"/social/" + post.id + ".jpg"} alt={post.title} />
                                </a>
                            </div>
                            <footer className="card__footer action">
                                <div className="action__like">
                                    <a href="#like" className="action__icon" title="Like">
                                        <FaThumbsUp />
                                        <span className="action__count">
                                            {post.likeCount > 1000 ?
                                                (Number(post.likeCount/1000).toFixed(1))+ "K": post.likeCount}
                                        </span>
                                    </a>
                                </div>
                                <div className="action__comment">
                                    <a href="#comments" className="action__icon" title="Comment">
                                        <FaRegCommentAlt />
                                        <span className="action__count">
                                            {post.commentCount > 1000 ?
                                                (Number(post.commentCount/1000).toFixed(1)) + "K" : post.commentCount}
                                        </span>
                                    </a>
                                </div>
                            </footer>
                        </article>
                    ))}
                </div>
            </section>
        )
    }
}

export default Social
