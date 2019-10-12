import React from "react";
import Section from "~components/Section"
import Social from "./Social"
import SocialData from '~data/social.json';

const SocialList = () => (
    <Section title="Social">
        <div className="cards">
            {SocialData.slice(0,3).map((post) => (
                <Social
                    key={post.id}
                    grid="show-1-3"
                    id={post.id}
                    username={post.username}
                    text={post.text}
                    likeCount={post.likeCount}
                    commentCount={post.commentCount}
                />
            ))}
        </div>
    </Section>
)
export default SocialList
