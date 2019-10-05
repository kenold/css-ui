import React from "react"
// import BlogCode from '../codes/blog';
import CtaData from '../../data/ctas.json';

const Cta = () => (
    <section className="l-cards l-cards--cta container">
        <div className="l-cards__heading">
            <h4>Card: Call-to-Action </h4>
        </div>

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
                    </div>
                        <footer className="card__footer btn">
                        { cta.btn1 && <a href="#signup"><div className="btn__primary">{cta.btn1}</div></a> }
                        { cta.btn2 && <a href="#learn-more"><div className="btn__secondary">{cta.btn2}</div></a> }
                        </footer>

                </article>
            ))}
        </div>

        <div className="code">

        </div>
    </section>
)

export default Cta
