import React from "react"
// import BlogCode from '../codes/blog';
import CtaData from '../../data/ctas.json';

const Cta = () => (
    <section className="l-cards l-cards--cta container">
        <div className="l-cards__heading">
            <h4>Cards + Call-to-Action </h4>
        </div>

        <div className="cards">
            {CtaData.slice(0, 3).map((cta) => (
                <article key={cta.id} className="card card--cta show-1-3">
                    <a href="#cta-detail">
                        <div className="card__body">
                            <div className="card__title" title={cta.title}>
                                {cta.title}
                            </div>
                            <div className="card__text">{cta.text}</div>
                        </div>
                    </a>
                    <div className="card__footer btn">
                    { cta.btn1 && <a href="#signup"><div className="btn__primary">{cta.btn1}</div></a> }
                    { cta.btn2 && <a href="#learn-more"><div className="btn__secondary">{cta.btn2}</div></a> }
                    </div>
                </article>
            ))}
        </div>

        <div className="code">

        </div>
    </section>
)

export default Cta
