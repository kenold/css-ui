import React from 'react';
import {PrismCode} from "~components/prismCode"
import Section from '~components/section'
import StackedFloatingIcon from '~components/Card/Stacked/FloatingIcon'

const code= `
<div class="card card--float">
    <div class="card__image">
        <img src="..." />
        <a href="#" class="card__icon-link btn btn--circle">
            <div class="card__icon">
                <i class="fas fa-play"></i>
            </div>
        </a>
    </div>
    <div class="card__content">
        <header class="card__header">
            <div class="card__topic">Thriller</div>
            <h4 class="card__title">Card Title</h4>
        </header>
        <div class="card__text">Lorem...</div>
    </div>
</div>
`.trim()
export const StackedFloatingIconCode = () => (
    <Section title="Floating Icon" cssClasses="l-ui l-ui--stacked-float">
        <div className="ui">
            <div className="ui__visual">
                <StackedFloatingIcon
                    id="6"
                    title="Card Title"
                    topic="Thriller"
                    text="Lorem..."
                />
            </div>
            <div className="ui__code">
                <PrismCode
                    code={code}
                    language="html"
                />
            </div>
        </div>
    </Section>
)