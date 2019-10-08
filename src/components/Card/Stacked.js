import React, { Component } from "react";
import Moment from 'react-moment';
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
            <section className="l-cards container" id="stacked">
                <div className="l-cards__heading">
                    <h4>Card: Stacked</h4>

                    <div className="show-code" title="Display Code" onClick={this.toggleHidden.bind(this)}>

                        {this.state.isHidden ? (
                            <a href="#code">
                                <div className="code-button">
                                    &lt; Show Code &gt;
                                </div>
                            </a>
                        ) : (
                            <a href="#stacked">
                                <div className="code-button">
                                    &lt; Hide Code &gt;
                                </div>
                            </a>
                        )}
                    </div>
                </div>

                <div className="cards">
                    {BlogData.slice(0,3).map((post) => (
                        <article key={post.id} className="card show-1-3">
                            <div className="card__image">
                                <a href="#blog-detail">
                                    <img src={"/blog-wide/" + (post.id+8) + ".jpg"} alt={post.title} />
                                </a>
                            </div>
                            <div className="card__content">
                                <div className="card__topic">{post.topic}</div>
                                <header className="card__header">
                                    <h4 className="card__title" title={post.title}>
                                        <a href="#blog-detail">{post.title}</a>
                                    </h4>
                                </header>
                                <footer className="card__footer">
                                    <div className="card__author">by {post.author}</div>
                                    <div className="card__date">
                                        <Moment fromNow>{post.date}</Moment>
                                    </div>
                                </footer>
                            </div>
                        </article>
                    ))}
                </div>
            </section>



            <section className="code-display" id="code">
                <div className="container">
                    {!this.state.isHidden && <StackedCode />}
                </div>
            </section>
            </>
        )
    }
}

export default Stacked
