import React, { Component } from "react"
import BlogCode from '../codes/blog';
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
            <section className="l-cards container">
                <div className="l-cards__heading">
                    <h4>Cards + Blog Posts </h4>
                </div>

                <div className="cards">
                    {BlogData.slice(0,3).map((post) => (
                        <article key={post.id} className="card card--blog show-1-3">
                            <a href="#blog-detail">
                                <figure className="card__media">
                                    <img src={"/blog/" + post.id + ".jpg"} alt={post.title} className="card__image" />
                                </figure>
                            </a>
                            <div className="card__body">
                                <div className="card__category">{post.category}</div>
                                <a href="#blog-detail">
                                    <h4 className="card__title" title={post.title}>{post.title}</h4>
                                </a>
                            </div>
                            <div className="card__footer">
                                <div className="card__author">{post.author}</div>
                                <div className="card__date">5 hours ago</div>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="show-code" onClick={this.toggleHidden.bind(this)}>
                    {this.state.isHidden ? "Show" : "Hide"} Code
                </div>
                {!this.state.isHidden && <BlogCode />}
            </section>
        )
    }
}

export default Stacked
