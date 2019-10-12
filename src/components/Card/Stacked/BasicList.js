import React from "react";
import BlogData from "~data/posts.json";
import Basic from "./Basic";
import Section from "~components/Section"

const BasicList = () => (
    <Section title="Stacked">
        <div className="cards">
            {BlogData.slice(0,3).map((post) => (
                <Basic
                    key={post.id}
                    cssClasses="show-1-3"
                    id={(post.id) + 8}
                    title={post.title}
                    topic={post.topic}
                    author={post.author}
                    date={post.date}
                />
            ))}
        </div>
    </Section>
)
export default BasicList
