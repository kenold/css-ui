import React from "react"
import Section from '~components/Section'
import Tour from "./Tour"
import TourData from "~data/tours.json"

const TourList = (props) => (
    <Section title="Tour">
        <div className="cards">
            {TourData.slice(0,4).map((tour) => (
                <Tour
                    key={tour.id}
                    cssClasses="card--hover-up show-2-4"
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
export default TourList
