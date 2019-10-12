import React from "react"
import Section from '~components/section'
import TestimonialData from '~data/testimonials.json';

const StackedTestimonial = (props) => (
    <article className={"card card--testimonial" + (props.cssClasses ? " " + props.cssClasses:"")}>
        <div className="card__content">
            <p className="card__text">"{props.text}"</p>
            <footer className="card__footer author">
                <div className="author__photo">
                    <img src={"/avatars/" + props.id + ".jpg"} alt={props.authorName} className="author__image" />
                </div>
                <div className="author__name">
                    {props.authorName} <br /> {props.authorPosition}
                </div>
            </footer>
        </div>
    </article>
)
export default StackedTestimonial

export const StackedTestimonialList = () => (
    <Section title="Testimonial">
        <div className="cards">
            {TestimonialData.map((testimonial) => (
                <StackedTestimonial
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
