import React from "react";
import { FaHeart, FaThumbsDown } from 'react-icons/fa';
import DatingData from '../../data/models.json';

const Dating = () => (
    <section className="l-cards container">
        <div className="l-cards__heading">
            <h4>Cards Overlay + Dating</h4>
        </div>
        <div className="cards">
            {DatingData.map((model) => (
                <article key={model.id} className="card card--overlay show-1-3">
                    <a href="#">
                        <figure className="card__media">
                            <img src={"/models/" + model.id + ".jpg"} alt={model.name} className="card__image" />
                        </figure>
                        <div className="darken"></div>

                        <div className="card__body">
                            <div className="card__title" title={model.name}>
                                {model.name}, {model.age}
                            </div>
                            <div className="card__text">{model.profession}</div>
                            <ul className="card__actions cta">
                                <li className="cta__dislike"><a href="#"><span className="icon"><FaThumbsDown /></span></a></li>
                                <li className="cta__like"><a href="#"><span className="icon"><FaHeart /></span></a></li>
                            </ul>
                        </div>
                    </a>
                </article>
            ))}
        </div>
    </section>
)

export default Dating
