import React from "react";
import { FaPlay } from 'react-icons/fa';
import BlogData from '../../data/posts.json';

const HorizontalVideo = () => (
    <section className="l-cards l-cards--wide l-cards--wide--video">
        {/* LEFT TO RIGHT */}
        <div className="container">
            {/* <div className="l-cards__heading">
                <h4>Cards + Blog Posts Wide </h4>
            </div> */}

            {BlogData.slice(2,3).map((post) => (
                <article key={post.id} className="card card--wide card--wide--video show-1-1">
                    <div className="card__media">
                        <img src={"/800627/" + post.id + ".jpg"} alt={post.title} className="card__image" />
                        <a href="#play-video" className="btn__circle" title={post.title}><div className="card__icon"><FaPlay /></div></a>
                    </div>
                    <div className="card__body">
                        <div className="card__category">
                            Watch the video
                        </div>
                        <h2 className="card__title">
                            {post.title}.
                        </h2>
                        <p className="card__text">{post.excerpt}</p>
                    </div>
                </article>
            ))}
        </div>
    </section>
)

export default HorizontalVideo
