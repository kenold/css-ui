import React from "react";
import Section from '~components/Section'
import Dating from './Dating'
import DatingData from '~data/models.json';

const DatingList = () => (
    <Section title="Overlay + Dating">
        <div className="cards">
            {DatingData.map((model) => (
                <Dating
                    key={model.id}
                    cssClasses="show-1-3"
                    id={model.id}
                    name={model.name}
                    age={model.age}
                    text={model.text}
                />
            ))}
        </div>
    </Section>
)
export default DatingList
