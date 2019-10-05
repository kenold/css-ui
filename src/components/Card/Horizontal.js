import React from "react";
import BlogData from '../../data/posts.json';

const Horizontal = () => (
    <section className="l-cards l-cards--wide">
        {/* LEFT TO RIGHT */}
        <div className="container">
            {BlogData.slice(0,1).map((post) => (
                <article key={post.id} className="card card--wide show-1-1">
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
                        <p className="card__text">{post.excerpt}</p>
                        <div className="card__footer">
                            <div className="card__meta-author">by {post.author}</div>
                            <div className="card__meta-comment">
                                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M12 1c-6.338 0-12 4.226-12 10.007 0 2.05.739 4.063 2.047 5.625l-1.993 6.368 6.946-3c1.705.439 3.334.641 4.864.641 7.174 0 12.136-4.439 12.136-9.634 0-5.812-5.701-10.007-12-10.007zm0 1c6.065 0 11 4.041 11 9.007 0 4.922-4.787 8.634-11.136 8.634-1.881 0-3.401-.299-4.946-.695l-5.258 2.271 1.505-4.808c-1.308-1.564-2.165-3.128-2.165-5.402 0-4.966 4.935-9.007 11-9.007zm-5 7.5c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm5 0c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm5 0c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5z"/></svg>
                                <span className="card__meta-comment-count">24</span>
                            </div>
                        </div>
                    </div>
                </article>
            ))}
        </div>
    </section>
)

export default Horizontal
