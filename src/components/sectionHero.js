import React from 'react'

const SectionHero = (props) => (
    <section className={"l-cards"
             + (props.cssClasses ? " " + props.cssClasses:"")}>
        <div className="container">
            {props.children}
        </div>
    </section>
)
export default SectionHero