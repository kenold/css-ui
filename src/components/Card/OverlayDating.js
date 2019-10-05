import React from "react";
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
                                <div className="swipe__left"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg></div>
                            </a>
                            <a href="#like" title="Like">
                                <div className="swipe__right"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"/></svg></div>
                            </a>
                        </div>
                    </div>
                </article>
            ))}
        </div>
    </section>
)

export default OverlayDating
