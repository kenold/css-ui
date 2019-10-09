import React from "react";
import MusicData from '../../data/tracks.json';

const HorizontalMusicPlayer = () => (
    <section className="l-cards">
        <div className="l-cards__heading container">
            <h4>Music Player</h4>
        </div>
        <div className="container">
            {MusicData.slice(0,1).map((track) => (
                <article key={track.id} className="card card--music show-1-1">
                    <div className="card__image">
                        <img src={"/tracks/" + track.id + ".jpg"} alt={track.title} />
                    </div>
                    <div className="card__content">
                        <header className="card__header">
                            <h2 className="card__title" title={track.title}>
                                {track.title}.
                            </h2>
                        </header>
                        <p className="card__subtitle">{track.artist}</p>
                        <footer className="card__footer">
                            <ul className="controls__list">
                                <li className="control__item"></li>
                                <li className="control__item"></li>
                                <li className="control__item"></li>
                            </ul>
                        </footer>
                    </div>
                </article>
            ))}
        </div>
    </section>
)

export default HorizontalMusicPlayer
