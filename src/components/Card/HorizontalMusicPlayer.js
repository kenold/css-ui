import React from "react";
import MusicData from '~data/tracks.json';
import { FaStepBackward, FaStepForward, FaPlay } from 'react-icons/fa';

const HorizontalMusicPlayer = () => (
    <section className="l-cards l-cards--music">
        <div className="l-cards__heading container">
            <h4>Music Player</h4>
        </div>
        <div className="container">
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
        </div>
    </section>
)

export default HorizontalMusicPlayer
