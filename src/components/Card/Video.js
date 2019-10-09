import React, { Component } from "react";
import { FaPlayCircle } from 'react-icons/fa';
import VideoData from '../../data/videos.json';

class Video extends Component {
    render() {
        return (
            <section className="l-cards container">
                <div className="l-cards__heading">
                    <h4>Video</h4>
                </div>

				<div className="cards">
                {VideoData.slice(0, 3).map((video) => (
                    <article key={video.id} className="card card--video show-1-3">
                        <div className="card__image">
                            <a href="#video-detail" title={video.title}>
                                <img src={"/videos/" + video.id + ".jpg"} alt={video.title} />
                            </a>
                            <div className="card__icon"><FaPlayCircle /></div>
                        </div>
                        <div className="card__content">
                            <h4 className="card__title" title={video.title}>
                                {video.title}
                            </h4>
                        </div>
                    </article>
                ))}
				</div>
            </section>
        )
    }
}

export default Video
