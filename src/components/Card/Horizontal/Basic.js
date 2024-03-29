import React from "react";
import { FaComment } from 'react-icons/fa';
import SectionHero from '~components/sectionHero'
import BlogData from '~data/posts.json';

const HorizontalBasic = () => (
    <SectionHero cssClasses="l-cards--horizontal">
        {BlogData.slice(0,1).map((post) => (
            <article key={post.id} className="card card--horizontal show-1-1">
                <div className="card__image">
                    <a href="#blog-detail">
                        <img src={"/800627/" + post.id + ".jpg"} alt={post.title} />
                    </a>
                </div>
                <div className="card__content">
                    <header className="card__header">
                        <div className="card__topic">{post.topic}</div>
                        <h2 className="card__title" title={post.title}>
                            <a href="#blog-detail">{post.title}.</a>
                        </h2>
                    </header>
                    <p className="card__text">Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien.</p>
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
    </SectionHero>
)
export default HorizontalBasic

