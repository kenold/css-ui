import React from 'react'

const Section = (props) => (
    <section className={"l-cards"
            + (props.cssClasses ? (" " + props.cssClasses) : "")}>
        <div className="container">
            <div className="l-cards__heading">
                <h4>{props.title}</h4>
            </div>
        </div>
        <div className="container">
            {props.children}
        </div>
    </section>
)
export default Section