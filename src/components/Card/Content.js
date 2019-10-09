import React, { Component } from 'react'
import Moment from 'react-moment'

class CardContent extends Component {
    render() {
        const { topic, title, author, date } = this.props;
        return (
            <div className="card__content">
                <div className="card__topic">{topic}</div>
                <header className="card__header">
                    <h4 className="card__title" title={title}>
                        <a href="#blog-detail">{title}</a>
                    </h4>
                </header>
                <footer className="card__footer">
                    <div className="card__author">by {author}</div>
                    <div className="card__date">
                        <Moment fromNow>{date}</Moment>
                    </div>
                </footer>
            </div>
        )
    }
}
export default CardContent;