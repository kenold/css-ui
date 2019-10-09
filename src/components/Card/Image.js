import React, { Component } from 'react'

class CardImage extends Component {
    render() {
        const { image, title } = this.props;
        return (
            <div className="card__image">
                <a href="#blog-detail">
                    <img src={image} alt={title} />
                </a>
            </div>
        )
    }
}
export default CardImage;