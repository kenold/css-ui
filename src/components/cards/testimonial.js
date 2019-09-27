import React from "react"
//import TestimonialCode from '../codes/Testimonial';
import TestimonialData from '../../data/testimonials.json';

const Testimonial = () => (

    <section className="l-cards container">
    <div className="l-cards__heading">
        <h4>Cards + Testimonial Testimonials </h4>
    </div>

    <div className="cards cards--Testimonial">
        {TestimonialData.map((testimonial) => (
            <article key={testimonial.id} className="card card--Testimonial grid-3">

                    <div className="card__body">
                        <div className="card__text">"{testimonial.text}"</div>
                    </div>
                    <div className="card__footer author">
                        <div className="author__photo">
                            <img src={"/testimonials/" + testimonial.id + ".jpg"} alt={testimonial.authorName} className="author__image" />
                        </div>
                        <div className="author__name">{testimonial.authorName} <br /> {testimonial.authorPosition}</div>
                    </div>

            </article>
        ))}
    </div>

    <div className="code">
        {/* <TestimonialCode /> */}
    </div>
    </section>
)

export default Testimonial
