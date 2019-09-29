import React, { Component } from "react";
import { FaPlay } from 'react-icons/fa';
import VideoData from '../../data/videos.json';

class Video extends Component {
    render() {
        return (
            <section className="l-cards container">
                <div className="l-cards__heading">
                    <h4>Cards + Video</h4>
                </div>

				<div className="cards">
                {VideoData.map((video) => (
                    <article key={video.id} className="card card--video show-1-3">
                        <a href="#">
                            <figure className="card__media">
                                <img src={"/videos/" + video.id + ".jpg"} alt={video.title} className="card__image" />
                                <div className="card__label">{video.duration}</div>
                            </figure>
                            <div className="card__icon"><FaPlay /></div>
                            <div className="card__body">
                                <div className="card__title" title={video.title}>
                                    <span>{video.title}</span>
                                </div>
                                <div className="card__subtitle">{video.artist}</div>
                            </div>
                        </a>
                    </article>
                ))}
				</div>
            </section>
        )
    }
}

export default Video
