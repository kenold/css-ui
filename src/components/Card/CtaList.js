import React from "react"
import CtaData from '../../data/ctas.json';
import Cta from "./Cta";
import Section from "../section";

const CtaList = () => (
    <Section headingTitle="Call-to-Action">
        <div className="cards">
            {CtaData.slice(0, 3).map((cta) => (
                <Cta
                    grid="show-1-3"
                    title={cta.title}
                    text={cta.text}
                    btn1={cta.btn1}
                    btn2={cta.btn2}
                />
            ))}
        </div>
   </Section>
)
export default CtaList
