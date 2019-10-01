import React from "react";
import DatingData from '../../data/models.json';

const Dating = () => (
    <section className="l-cards container">
        <div className="l-cards__heading">
            <h4>Cards Overlay + Dating</h4>
        </div>
        <div className="cards">
            {DatingData.map((model) => (
                <article key={model.id} className="card card--overlay show-1-3">
                    <a href="#profile">
                        <figure className="card__media">
                            <img src={"/models/" + model.id + ".jpg"} alt={model.name} className="card__image" />
                        </figure>
                        <div className="darken"></div>
                    </a>
                    <div className="card__body">
                        <a href="#profile">
                            <div className="card__title" title={model.name}>
                                {model.name}, {model.age}
                            </div>
                            <div className="card__text">{model.profession}</div>
                        </a>
                        <ul className="card__actions swipe">
                            <li className="swipe__left"><a href="#dislike" title="Dislike"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg></a></li>
                            <li className="swipe__right"><a href="#like" title="Like"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"/></svg></a></li>
                        </ul>
                    </div>
                </article>
            ))}
        </div>
    </section>
)

export default Dating
