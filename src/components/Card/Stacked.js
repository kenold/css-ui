import React, { Component } from "react";
import StackedCode from './StackedCode';
import BlogData from '../../data/posts.json';

import CardImage from './Image'
import CardContent from './Content'
import CardHeading from './Heading'
//import Card from './Card'

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
                <CardHeading heading="Stacked" />

                <div className="cards">
                    {BlogData.slice(0,3).map((post) => (
                    <article className="card show-1-3">
                        <CardImage
                            title={post.title}
                            image={"/blog-wide/" + (post.id+8) + ".jpg"}
                        />
                        <CardContent
                            topic={post.topic}
                            title={post.title}
                            author={post.author}
                            date={post.date}
                        />
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
