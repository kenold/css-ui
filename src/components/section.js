import React from 'react'

const Section = (props) => (
    <section className="l-cards container">
        <div className="l-cards__heading">
            <h4>{props.headingTitle}</h4>
        </div>
        {props.children}
    </section>
)
export default Section