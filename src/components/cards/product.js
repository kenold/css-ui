import React from "react";
import { FaHeart } from 'react-icons/fa';
import ProductData from '../../data/products.json';

const Product = () => (
    <section className="l-cards container">
        <div className="l-cards__heading">
            <h4>Cards Overlay + Icon/Product</h4>
        </div>
        <div className="cards">
            {ProductData.map((product) => (
                <article key={product.id} className="card card--overlay-icon show-2-4">
                    <a href="#">
                        <figure className="card__media">
                            <img src={"/products/" + product.id + ".jpg"} alt={product.title} className="card__image" />
                        </figure>
                        <div className="card__icon"><FaHeart /></div>
                        <div className="card__body">
                            <div className="card__category">
                                {product.category}
                            </div>
                            <div className="card__title" title="{product.title}">
                                <span>{product.title}</span>
                            </div>
                        </div>
                        <div className="card__footer price">
                            <div className="price__original">${product.price}</div>
                            <div className="price__sale">${product.price - 20.12}</div>
                        </div>
                    </a>
                </article>
            ))}
        </div>
    </section>
)

export default Product
