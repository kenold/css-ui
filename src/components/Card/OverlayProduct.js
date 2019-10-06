import React from "react";
import { FaRegHeart } from 'react-icons/fa';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';
import ProductData from '../../data/products.json';

const OverlayProduct = () => (
    <section className="l-cards container">
        <div className="l-cards__heading">
            <h4>Card: Product</h4>
        </div>
        <div className="cards">
            {ProductData.map((product) => (
                <article key={product.id} className="card card--overlay-icon show-2-4">
                    <div className="card__image">
                        <a href="#product-detail">
                            <img src={"/products/" + product.id + ".jpg"} alt={product.title} />
                        </a>
                    </div>
                    <div className="card__icon"><FaRegHeart /></div>
                    <div className="card__content">
                        <div className="card__topic">
                            {product.topic}
                        </div>
                        <header className="class__header">
                            <h5 className="card__title" title="{product.title}">{product.title}</h5>
                        </header>
                        <footer className="card__footer">
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
                        </footer>
                    </div>
                </article>
            ))}
        </div>
    </section>
)

export default OverlayProduct
