import React from "react";
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';
import ProductData from '../../data/products.json';

const OverlayProduct = () => (
    <section className="l-cards container">
        <div className="l-cards__heading">
            <h4>Cards Overlay + Icon/Product</h4>
        </div>
        <div className="cards">
            {ProductData.map((product) => (
                <article key={product.id} className="card card--overlay-icon show-2-4">
                    <a href="#product-detail">
                        <figure className="card__media">
                            <img src={"/products/" + product.id + ".jpg"} alt={product.title} className="card__image" />
                        </figure>
                        <div className="card__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6.28 3c3.236.001 4.973 3.491 5.72 5.031.75-1.547 2.469-5.021 5.726-5.021 2.058 0 4.274 1.309 4.274 4.182 0 3.442-4.744 7.851-10 13-5.258-5.151-10-9.559-10-13 0-2.676 1.965-4.193 4.28-4.192zm.001-2c-3.183 0-6.281 2.187-6.281 6.192 0 4.661 5.57 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-4.011-3.097-6.182-6.274-6.182-2.204 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248z"/></svg></div>
                        <div className="card__body">
                            <div className="card__topic">
                                {product.topic}
                            </div>
                            <div className="card__title" title="{product.title}">
                                <span>{product.title}</span>
                            </div>
                        </div>
                        </a>
                        <div className="card__footer">
                            <div className="price">
                                <span className={"price__original" + (product.discount ? " strike": "")}>${product.price}</span>
                                {product.discount &&
                                    <span className="price__sale">
                                        ${Number(product.price - (product.price * (product.discount/100))).toFixed(2)}
                                    </span>
                                }
                            </div>
                            <div className="rating">
                                <Rater total={5} rating={2} />
                            </div>
                        </div>

                </article>
            ))}
        </div>
    </section>
)

export default OverlayProduct
