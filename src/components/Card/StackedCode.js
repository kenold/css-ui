import React, { Component } from 'react';
//import Prism from 'prismjs';
import Prism from 'prismjs';
import '../../../static/prism.css';

const code= `
    <div class="card">
        <figure class="card__image">
            <a href="...">
                <img src="..." alt="" class="card__image-temp" />
            </a>
        </figure>
        <div class="card__content">
            <div class="card__topic">Blog</div>
            <div class="card__title">
                <a href="...">Card Title</a>
            </div>
        </div>
        <div class="card__footer">
            <div class="card__author">Jane Doe</div>
            <div class="card__date">5 hours ago</div>
        </div>
    </div>
`
class StackedCode extends Component {
    componentDidMount() {
        Prism.highlightAll();
    }
    render() {
        return (
            <>
            <pre>
                <code className="language-html">
                    {code}
                </code>
            </pre>
            </>
        );
    }
}

export default StackedCode