import React from "react"
import Section from '~components/Section'
import Testimonial from './Testimonial'
import TestimonialData from '~data/testimonials.json';

const TestimonialList = () => (
    <Section title="Testimonial">
        <div className="cards">
            {TestimonialData.map((testimonial) => (
                <Testimonial
                    key={testimonial.id}
                    cssClasses="show-1-3"
                    id={testimonial.id}
                    text={testimonial.text}
                    authorName={testimonial.authorName}
                    authorPosition={testimonial.authorPosition}
                />
            ))}
        </div>
    </Section>
)
export default TestimonialList
