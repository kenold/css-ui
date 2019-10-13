import React from "react";
import SectionHero from '~components/sectionHero'
import MusicData from '~data/tracks.json';
import { FaStepBackward, FaStepForward, FaPlay } from 'react-icons/fa';

const HorizontalMusicPlayer = () => (
    <SectionHero cssClasses="l-cards--horizontal-music">
        {MusicData.slice(0,1).map((track) => (
            <div key={track.id} className="card card--music">
                <div className="card__image">
                    <img src={"/tracks/" + track.id + ".jpg"} alt={track.title} />
                </div>
                <div className="card__content">
                    <header className="card__header">
                        <h2 className="card__title">{track.title}</h2>
                    </header>
                    <p className="card__subtitle">{track.artist}</p>
                    <ul className="controls__list">
                        <li className="control__item"><FaStepBackward /></li>
                        <li className="control__item"><FaPlay /></li>
                        <li className="control__item"><FaStepForward /></li>
                    </ul>
                </div>
            </div>
        ))}
    </SectionHero>
)
export default HorizontalMusicPlayer
