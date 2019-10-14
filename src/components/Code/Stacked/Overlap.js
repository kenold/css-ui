import React from 'react';
import {PrismCode} from "~components/prismCode"
import Section from '~components/section'
import StackedOverlap from '~components/Card/Stacked/Overlap'

const code= `
<div class="card card--overlap">
    <div class="card__image"><img src="..." /></div>
    <div class="card__content">
        <header class="card__header">
            <h4 class="card__title">Card Title</h4>
        </header>
        <div class="card__footer">
            <div class="card__date">6 months ago</div>
        </div>
    </div>
</div>
`.trim()
export const StackedOverlapCode = () => (
    <Section title="Overlap" cssClasses="l-ui l-ui--stacked-overlap">
        <div className="ui">
            <div className="ui__visual">
                <StackedOverlap
                    id="1"
                    title="Card Title"
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