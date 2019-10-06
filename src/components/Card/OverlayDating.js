import React from "react";
import { FaTimes, FaHeart } from 'react-icons/fa';
import DatingData from '../../data/models.json';

const OverlayDating = () => (
    <section className="l-cards container">
        <div className="l-cards__heading">
            <h4>Card: Overlay + Dating</h4>
        </div>
        <div className="cards">
            {DatingData.map((model) => (
                <article key={model.id} className="card card--overlay card--overlay--dating show-1-3">
                    <div className="card__image">
                        <a href="#movie-detail" title={model.title}>
                            <img src={"/models/" + model.id + ".jpg"} alt={model.title} />
                        </a>
                    </div>
                    <div className="darken"></div>
                    <div className="card__content">
                        <div className="card__title model" title={model.name}>
                            <a href="#profile" className="model__link">
                                <span className="model__name">{model.name}, </span>
                                <span className="model__age">{model.age}</span>
                            </a>
                        </div>
                        <div className="card__text">{model.profession}</div>
                        <div className="card__actions swipe">
                            <a href="#dislike" title="Dislike">
                                <div className="swipe__left"><FaTimes /></div>
                            </a>
                            <a href="#like" title="Like">
                                <div className="swipe__right"><FaHeart /></div>
                            </a>
                        </div>
                    </div>
                </article>
            ))}
        </div>
    </section>
)

export default OverlayDating
