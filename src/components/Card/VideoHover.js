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
                        <a href="#video-detail">
                            <div className="card__media">
                                <img src={"/videos/" + video.id + ".jpg"} alt={video.title} className="card__image" />
                                <div className="card__label">{video.duration}</div>
                            </div>
                            <div className="card__icon"><FaPlay /></div>
                            <div className="card__body">
                                <div className="card__title" title={video.title}>
                                    <span>{video.title}</span>
                                </div>
                            </div>
                        </a>
                    </article>
                ))}
				</div>
            </section>
        )
    }
}

export default VideoHover
