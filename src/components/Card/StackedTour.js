import React, { Component } from "react";
import { FaMapMarkerAlt } from 'react-icons/fa';
import TourData from '../../data/tours.json';

class StackedTour extends Component {
    render() {
        return (
            <>
            <section className="l-cards container">
                <div className="l-cards__heading">
                    <h4>Card: Stacked + Tour</h4>
                </div>

                <div className="cards">
                    {TourData.slice(0,4).map((tour) => (
                        <article key={tour.id} className="card card--hover-up show-2-4">
                            <div className="card__image">
                                <a href="#tour-detail">
                                    <img src={"/tours/" + tour.id + ".jpg"} alt={tour.title} />
                                </a>
                            </div>
                            <div className="card__content">
                                <div className="card__topic">
                                    <FaMapMarkerAlt /> {tour.topic}
                                </div>
                                <header className="card__header">
                                    <h4 className="card__title" title={tour.title}>
                                        <a href="#tour-detail">{tour.title}</a>
                                    </h4>
                                </header>
                                <p className="card__text card__text--small">{tour.text}</p>
                                <div className="card__subtext"><span>from</span> ${tour.price}</div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
            </>
        )
    }
}

export default StackedTour
