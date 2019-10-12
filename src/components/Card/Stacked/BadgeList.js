import React from "react";
import Section from '~components/Section'
import Badge from './Badge'
import BlogData from '~data/posts.json';

const BadgeList = () => (
    <Section>
        <div className="cards">
            {BlogData.slice(0, 3).map((post) => (
                <Badge
                    key={post.id}
                    cssClasses="show-1-3"
                    id={(post.id) + 4}
                    title={post.title}
                    topic={post.topic}
                    author={post.author}
                    date={post.date}
                />
            ))}
        </div>
    </Section>
)
export default BadgeList
