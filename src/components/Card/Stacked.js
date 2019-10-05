import React, { Component } from "react"
import StackedCode from './StackedCode';
import BlogData from '../../data/posts.json';

class Stacked extends Component {
    constructor (props) {
        super(props)
        this.state = {
          isHidden: true
        }
      }
      toggleHidden () {
        this.setState({
          isHidden: !this.state.isHidden
        })
      }
    render() {
        return (
            <>
            <section className="l-cards container">
                <div className="l-cards__heading">
                    <h4>Card: Stacked</h4>
                </div>

                <div className="cards">
                    {BlogData.slice(0,3).map((post) => (
                        <article key={post.id} className="card card--blog show-1-3">
                            <figure className="card__media">
                                <a href="#blog-detail">
                                    <img src={"/blog/" + post.id + ".jpg"} alt={post.title} className="card__image" />
                                </a>
                            </figure>
                            <div className="card__body">
                                <div className="card__topic">{post.topic}</div>
                                <a href="#blog-detail">
                                    <h4 className="card__title" title={post.title}>{post.title}</h4>
                                </a>
                            </div>
                            <div className="card__footer">
                                <div className="card__author">{post.author}</div>
                                <div className="card__date">
                                    {Math.floor(Math.random() * 9) + 2} hours ago
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <div className="show-code container" title="Display Code" onClick={this.toggleHidden.bind(this)}>
                <div className="code-button">
                    &lt; {this.state.isHidden ? "Show" : "Hide"} Code for Card Stacked &gt;
                </div>
            </div>

            <section className="code-display">
                <div className="container">
                    {!this.state.isHidden && <StackedCode />}
                </div>
            </section>
            </>
        )
    }
}

export default Stacked
