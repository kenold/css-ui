import React from "react";
import { FaPlay } from 'react-icons/fa';
import Button from "../../Button/Icon";
import SectionHero from '~components/sectionHero'
import BlogData from '~data/posts.json';

const HorizontalVideo = () => (
    <SectionHero cssClasses="l-cards--horizontal--video">
        {BlogData.slice(2,3).map((post) => (
            <article key={post.id} className="card card--horizontal card--horizontal--video show-1-1">
                <div className="card__image">
                    <img src={"/800627/" + post.id + ".jpg"} alt={post.title} />
                    <Button url="#play" type="circle"><FaPlay /></Button>
                </div>
                <div className="card__content">
                    <div className="card__topic">Watch the video</div>
                    <header className="card__header">
                        <h2 className="card__title" title={post.title}>
                            <a href="#blog-detail">{post.title}.</a>
                        </h2>
                    </header>
                    <p className="card__text">{post.text}</p>
                </div>
            </article>
        ))}
    </SectionHero>
)

export default HorizontalVideo
