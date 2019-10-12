import React from "react"
import BlogData from '~data/posts.json';
import Overlap from './Overlap.js';
import Section from "~components/Section"

const OverlapList = (props) => (
    <Section title="Overlap">
        <div className="cards">
            {BlogData.slice(0,3).map((post) => (
                <Overlap
                    key={post.id}
                    cssClasses="show-1-3"
                    id={post.id}
                    title={post.title}
                    date={post.date}
                />
            ))}
        </div>
    </Section>
)

export default OverlapList
