import React from "react";
import BlogData from '~data/posts.json';
import Basic from './Basic'
import Section from '~components/Section'

const MediaObjectList = (props) => (

    <Section title="Media Object">
        <div className="cards">
            {BlogData.slice(0,3).map((post) => (
                <Basic
                    key={post.id}
                    cssClasses="card--hover-fade show-1-3"
                    id={post.id}
                    title={post.title}
                    topic={post.topic}
                    author={post.author}
                    date={post.date}
                />
            ))}
        </div>
    </Section>
)
export default MediaObjectList
