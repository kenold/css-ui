import React from 'react';
import {PrismCode} from "~components/prismCode"
import Section from '~components/section'
import StackedBasic from '~components/Card/Stacked/Basic'

const code= `
<div class="card">
    <div class="card__image"><img src="..." /></div>
    <div class="card__content">
        <header class="card__header">
            <div class="card__topic">Topic</div>
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
export const StackedBasicCode = () => (
    <Section title="Stacked Default" cssClasses="l-ui l-ui--stacked">
        <div className="ui">
            <div className="ui__visual">
                <StackedBasic
                    id={9}
                    title="Card Title"
                    topic="Topic"
                    text="Lorem usce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue."
                    author="Jane Doe"
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