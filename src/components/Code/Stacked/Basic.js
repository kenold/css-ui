import React, { Component } from 'react';
import Prism from 'prismjs';
import '../../../../static/prism.css';

const code= `
    <div class="card">
        <div class="card__image"><img src="..." /></div>
        <div class="card__content">
            <header class="card__header">
                <div class="card__topic">Topic</div>
                <h4 class="card__title">Card Title</h4>
            </header>
        </div>
        <div class="card__footer">
            <div class="card__author">by Jane Doe</div>
            <div class="card__date">6 months ago</div>
        </div>
    </div>
`
class StackedBasicCode extends Component {
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

export default StackedBasicCode