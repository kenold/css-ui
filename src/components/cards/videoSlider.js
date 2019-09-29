import React, { Component } from "react";
import { FaPlay } from 'react-icons/fa';
import VideoData from '../../data/videos.json';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Video extends Component {
    render() {
        // slick carousel
		var settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 3.5,
            slidesToScroll: 2,
            initialSlide: 0,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2.5,
                  slidesToScroll: 2,
                  initialSlide: 2,
                  arrows: false,
                  dots: false
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1.5,
                  slidesToScroll: 1,
                  arrows: false,
                  dots: false
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
