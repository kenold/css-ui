import React from "react"
import CtaData from '../../data/ctas.json';
import Heading from "./Heading.js";

const Cta = () => (
    <section className="l-cards l-cards--cta container">
        <Heading title="Call-to-Action" />

        <div className="cards">
            {CtaData.slice(0, 3).map((cta) => (
                <article key={cta.id} className="card card--cta show-1-3">
                    <div className="card__content">
                        <header className="card__header">
                            <h4 className="card__title" title={cta.title}>
                                <a href="#blog-detail">{cta.title}</a>
                            </h4>
                        </header>
                        <div className="card__text">{cta.text}</div>
                        <footer className="card__footer btn">
                        { cta.btn1 && <a href="#signup"><div className="btn--primary">{cta.btn1}</div></a> }
                        { cta.btn2 && <a href="#learn-more"><div className="btn--secondary">{cta.btn2}</div></a> }
                        </footer>
                    </div>
                </article>
            ))}
        </div>
    </section>
)
export default Cta
