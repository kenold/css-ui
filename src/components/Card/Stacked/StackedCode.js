import React, { Component } from 'react';
//import Prism from 'prismjs';
import Prism from 'prismjs';
import '../../../static/prism.css';

const code= `
    <div class="card">
        <div class="card__image">
            <a href="...">
                <img src="..." alt="" />
            </a>
        </div>
        <div class="card__content">
            <div class="card__topic">Blog</div>
            <header class="card__header">
                <h4 class="card__title">
                    <a href="...">Card Title</a>
                </h4>
            </header>
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