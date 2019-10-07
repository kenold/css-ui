import React from 'react'

const Button = (props) => (
    <a href={props.url} className={"card__icon-link btn btn--" + props.type}>
        <div className="card__icon">{props.children}</div>
    </a>
)

export default Button;