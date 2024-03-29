import React from "react";
import { FaRegHeart } from 'react-icons/fa';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';
import Section from '~components/section'
import ProductData from '~data/products.json'

const OverlayProduct = (props) => (
    <article className={"card card--overlay-icon" + (props.cssClasses ? " " + props.cssClasses:"")}>
        <div className="card__image">
            <a href="#product-detail" title={props.title}>
                <img src={"/products/" + props.id + ".jpg"} alt={props.title} />
            </a>
            <a href="#favorite" title="Favorite">
                <div className="card__icon"><FaRegHeart /></div>
            </a>
        </div>
        <div className="card__content">
            <header className="class__header">
                <div className="card__topic">{props.topic}</div>
                <h5 className="card__title">
                    <a href="#product-detail" title={props.title}>{props.title}</a>
                </h5>
            </header>
            <footer className="card__footer">
                <div className="price">
                    <span className={"price__original" + (props.discount ? " strike": "")}>${props.price}</span>
                    {props.discount &&
                        <span className="price__sale">
                            ${Number(props.price - (props.price * (props.discount/100))).toFixed(2)}
                        </span>
                    }
                </div>
                <div className="rating">
                    <Rater
                        total={5}
                        rating={Math.floor((Math.random() * 5) + 0)} />
                </div>
            </footer>
        </div>
    </article>
)
export default OverlayProduct

export const OverlayProductList = () => (
    <Section title="Overlay Icon" cssClasses="l-cards--overlay-product">
        <div className="cards">
            {ProductData.map((product) => (
                <OverlayProduct
                    key={product.id}
                    cssClasses="show-2-4"
                    id={product.id}
                    title={product.title}
                    topic={product.topic}
                    price={product.price}
                    discount={product.discount}
                />
            ))}
        </div>
    </Section>
)
