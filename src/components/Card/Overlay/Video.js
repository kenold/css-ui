import React from "react";
import { FaPlayCircle } from 'react-icons/fa';
import Section from '~components/section'
import VideoData from '~data/videos.json';

const OverlayVideo = (props) => (
    <article className={"card card--video" + (props.cssClasses ? " " + props.cssClasses:"")}>
        <div className="card__image">
            <a href="#video-detail">
                <img src={"/videos/" + props.id + ".jpg"} alt={props.title} />
                <div className="card__icon"><FaPlayCircle /></div>
            </a>
        </div>
        <div className="card__content">
            <h4 className="card__title">
                <a href="#video-detail">{props.title}</a>
            </h4>
        </div>
    </article>
)
export default OverlayVideo

export const OverlayVideoList = (props) => (
    <Section title="Video">
        <div className="cards">
        {VideoData.slice(0, 3).map((video) => (
            <OverlayVideo
                key={video.id}
                cssClasses="show-1-3"
                id={video.id}
                title={video.title}
            />
        ))}
        </div>
    </Section>
)
