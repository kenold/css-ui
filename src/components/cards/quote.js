import React from "react"
//import QuoteCode from '../codes/quote';
import QuoteData from '../../data/quotes.json';

const Quote = () => (

    <section className="l-cards container">
    <div className="l-cards__heading">
        <h4>Cards + quote quotes </h4>
    </div>

    <div className="cards cards--quote">
        {QuoteData.map((quote) => (
            <article key={quote.id} className="card card--quote grid-3">

                    <div className="card__body">
                        <div className="card__text">"{quote.text}"</div>
                    </div>
                    <div className="card__footer author">
                        <div className="author__photo">
                            <img src={"/quotes/" + quote.id + ".jpg"} alt={quote.authorName} className="author__image" />
                        </div>
                        <div className="author__name">{quote.authorName} <br /> {quote.authorPosition}</div>
                    </div>

            </article>
        ))}
    </div>

    <div className="code">
        {/* <QuoteCode /> */}
    </div>
    </section>
)

export default Quote
