import React from "react"

const Testimonial = (props) => (
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
export default Testimonial
