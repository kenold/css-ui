import React from "react";
import Section from '~components/Section'
import Video from './Video'
import VideoData from '~data/videos.json';

const VideoList = (props) => (
    <Section title="Video">
        <div className="cards">
        {VideoData.slice(0, 3).map((video) => (
            <Video
                key={video.id}
                cssClasses="show-1-3"
                id={video.id}
                title={video.title}
            />
        ))}
        </div>
    </Section>
)
export default VideoList
