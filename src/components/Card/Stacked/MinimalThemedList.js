import React from "react"
import Section from '~components/Section'
import MinimalThemed from './MinimalThemed'
import BlogData from '~data/posts.json';

const MinimalThemedList = () => (
    <Section title="Minimal Themes">
        <div className="cards">
            {BlogData.slice(0, 3).map((post) => (
                <MinimalThemed
                    key={post.id}
                    cssClasses="show-1-3 no-gap"
                    title={post.title}
                    topic={post.topic}
                    shortTitle={post.shortTitle}
                    cta={post.cta}
                    theme={post.theme}
                />
            ))}
        </div>
    </Section>
)
export default MinimalThemedList
