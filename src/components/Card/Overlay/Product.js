import React from "react";
import { FaRegHeart } from 'react-icons/fa';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';

const Product = (props) => (
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
            <div className="card__topic">
                {props.topic}
            </div>
            <header className="class__header">
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
                    <Rater total={5} rating={2} />
                </div>
            </footer>
        </div>
    </article>
)
export default Product
