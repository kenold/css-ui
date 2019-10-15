import React from 'react';
import {PrismCode} from "~components/prismCode"
import Section from '~components/section'
import StackedBadge from '~components/Card/Stacked/Badge'

const code= `
<div class="card card--badge">
    <div class="card__image"><img src="..." /></div>
    <div class="card__content">
        <header class="card__header">
            <div class="card__topic">Fashion</div>
            <h4 class="card__title">Card Title</h4>
        </header>
        <div class="card__text">Lorem...</div>
        <div class="card__footer">
            <div class="card__author">by Jane Doe</div>
            <div class="card__date">6 months ago</div>
        </div>
    </div>
</div>
`.trim()
export const StackedBadgeCode = () => (
    <Section title="Badge" cssClasses="l-ui l-ui--stacked-badge">
        <div className="ui">
            <div className="ui__visual">
                <StackedBadge
                    id="5"
                    title="Card Title"
                    topic="Fashion"
                    date="4/21/2019"
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