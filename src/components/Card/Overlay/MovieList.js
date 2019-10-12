import React from "react";
import Section from '~components/Section'
import Movie from './Movie'
import MovieData from '~data/movies.json';

const MovieList = () => (
    <Section title="Overlay + Movie">
        <div className="cards">
            {MovieData.map((movie) => (
                <Movie
                    key={movie.id}
                    cssClasses="show-1-3"
                    id={movie.id}
                    title={movie.title}
                    isStreaming={movie.isStreaming}
                    text={movie.text}
                />
            ))}
        </div>
    </Section>
)
export default MovieList
