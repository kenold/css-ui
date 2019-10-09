import React, { Component } from "react";
import { FaPlay } from 'react-icons/fa';
import VideoData from '../../data/videos.json';

class VideoHover extends Component {
    render() {
        return (
            <section className="l-cards container">
                <div className="l-cards__heading">
                    <h4>Card: Video + Hover</h4>
                </div>

				<div className="cards">
                {VideoData.slice(3, 6).map((video) => (
                    <article key={video.id} className="card card--video-hover show-1-3">
                        <div className="card__image">
                            <a href="#video-detail">
                                <img src={"/videos/" + video.id + ".jpg"} alt={video.title} />
                                <div className="card__badge card__badge--right">{video.duration}</div>
                                <div className="card__icon"><FaPlay /></div>
                            </a>
                        </div>
                        <div className="card__content">
                            <header className="card__header">
                                <h4 className="card__title" title={video.title}>
                                    {video.title}
                                </h4>
                            </header>
                        </div>
                    </article>
                ))}
				</div>
            </section>
        )
    }
}

export default VideoHover
