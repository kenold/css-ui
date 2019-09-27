import React, { Component } from "react";
import { FaPlay } from 'react-icons/fa';
import VideoData from '../../data/videos.json';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Video extends Component {
    render() {
        // slick carousel
		const settings = {
			arrows: true,
			infinite: false,
			slidesToShow: 3.5,
			slidesToScroll: 1,
			initialSlide: 0,
			autoplay: true,
      		speed: 2000,
			responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3.5,
					slidesToScroll: 1,
					arrows: true,
				}
				},
				{
				breakpoint: 600,
				settings: {
					slidesToShow: 2.5,
					slidesToScroll: 1
				}
			}
			]
		};
        return (
            <section className="l-cards container">
                <div className="l-cards__heading">
                    <h4>Cards + Video</h4>
                </div>
                <Slider {...settings}>
                {VideoData.map((video) => (
                    <article key={video.id} className="card card--video">
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
                </Slider>
            </section>
        )
    }
}

export default Video
