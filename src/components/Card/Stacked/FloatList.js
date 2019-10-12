import React from "react";
import Section from '~components/Section'
import Float from './Float'
import MovieData from '~data/movies.json';

const FloatList = () => (
    <Section title="Floating Icon">
        <div className="cards">
            {MovieData.slice(0, 3).map((movie) => (
                <Float
                    key={movie.id}
                    cssClasses="show-1-3"
                    id={(movie.id) + 3}
                    title={movie.title}
                    topic={movie.topic}
                    text={movie.text}
                />
            ))}
        </div>
    </Section>
)
export default FloatList
