import React from 'react'

const SectionHero = (props) => (
    <section className={"l-cards l-cards--horizontal"
             + (props.cssClasses ? " " + props.cssClasses:"")}>
        <div className="container">
            {props.children}
        </div>
    </section>
)
export default SectionHero