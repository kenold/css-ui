import React from "react"

const Cta = (props) => (
    <article key={props.id} className={"card card--cta " + props.grid}>
        <div className="card__content">
            <header className="card__header">
                <h4 className="card__title" title={props.title}>
                    <a href="#blog-detail">{props.title}</a>
                </h4>
            </header>
            <div className="card__text">{props.text}</div>
            <footer className="card__footer">
                { props.btn1 &&
                    <a href="#signup">
                        <div className="btn btn--primary">{props.btn1}</div>
                    </a>
                }
                { props.btn2 &&
                    <a href="#learn-more">
                        <div className="btn btn--secondary">{props.btn2}</div>
                    </a>
                }
            </footer>
        </div>
    </article>
)
export default Cta
