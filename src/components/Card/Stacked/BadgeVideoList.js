import React from "react";
import Section from '~components/Section'
import BadgeVideo from './BadgeVideo'
import VideoData from '~data/videos.json'

const BadgeVideoList = () => (
    <Section title="Video + Badge">
        <div className="cards">
        {VideoData.slice(3, 6).map((video) => (
            <BadgeVideo
                key={video.id}
                cssClasses="show-1-3"
                id={video.id}
                title={video.title}
                duration={video.duration}
            />
        ))}
        </div>
    </Section>
)
export default BadgeVideoList
