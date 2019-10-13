import React from "react";
import { FaMapMarkerAlt } from 'react-icons/fa';
import Section from '~components/section'
import TourData from "~data/tours.json"

const StackedTour = (props) => (
    <article className={"card" + (props.cssClasses ? " " + props.cssClasses:"")}>
        <div className="card__image">
            <a href="#tour-detail">
                <img src={"/tours/" + props.id + ".jpg"} alt={props.title} />
            </a>
        </div>
        <div className="card__content">
            <header className="card__header">
                <div className="card__topic">
                    <FaMapMarkerAlt /> {props.topic}
                </div>
                <h4 className="card__title" title={props.title}>
                    <a href="#tour-detail">{props.title}</a>
                </h4>
            </header>
            <p className="card__text card__text--small">{props.text}</p>
            <div className="card__subtext"><span>from</span> ${props.price}</div>
        </div>
    </article>
)
export default StackedTour

export const StackedTourList = (props) => (
    <Section title="Tour" cssClasses="l-cards--stacked-tour">
        <div className="cards">
            {TourData.slice(0,4).map((tour) => (
                <StackedTour
                    key={tour.id}
                    cssClasses="card--tour card--hover-up show-2-4"
                    id={tour.id}
                    title={tour.title}
                    topic={tour.topic}
                    text={tour.text}
                    price={tour.price}
                />
            ))}
        </div>
    </Section>
)
