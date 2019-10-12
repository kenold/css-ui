import React from "react"
import CtaData from '~data/ctas.json';
import Section from "~components/Section";

const StackedCta = (props) => (
    <article className={"card card--cta" + (props.cssClasses ? " " + props.cssClasses:"")}>
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
export default StackedCta

export const StackedCtaList = () => (
    <Section title="Call-to-Action">
        <div className="cards">
            {CtaData.slice(0, 3).map((cta) => (
                <StackedCta
                    key={cta.id}
                    cssClasses="show-1-3"
                    title={cta.title}
                    text={cta.text}
                    btn1={cta.btn1}
                    btn2={cta.btn2}
                />
            ))}
        </div>
   </Section>
)
