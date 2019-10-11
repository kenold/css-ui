import React from "react";
import { FaComment } from 'react-icons/fa';
import BlogData from '../../data/posts.json';

const Horizontal = () => (
    <>
    <section className="l-cards container">
        <div className="l-cards__heading">
            <h4>Horizontal</h4>
        </div>
    </section>

    <section className="l-cards l-cards--horizontal">
        {/* LEFT TO RIGHT */}
        <div className="container">
            {BlogData.slice(0,1).map((post) => (
                <article key={post.id} className="card card--horizontal show-1-1">
                    <div className="card__image">
                        <a href="#blog-detail">
                            <img src={"/800627/" + post.id + ".jpg"} alt={post.title} />
                        </a>
                    </div>
                    <div className="card__content">
                        <div className="card__topic">{post.topic}</div>
                        <header className="card__header">
                            <h2 className="card__title" title={post.title}>
                                <a href="#blog-detail">{post.title}.</a>
                            </h2>
                        </header>
                        <p className="card__text">{post.text}</p>
                        <div className="card__footer">
                            <div className="card__meta-author">by {post.author}</div>
                            <div className="card__meta-comment">
                                <FaComment />
                                <span className="card__meta-comment-count">24</span>
                            </div>
                        </div>
                    </div>
                </article>
            ))}
        </div>
    </section>
    </>
)

export default Horizontal
