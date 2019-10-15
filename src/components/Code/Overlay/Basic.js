import React from 'react';
import {PrismCode} from "~components/prismCode"
import Section from '~components/section'
import OverlayBasic from '~components/Card/Overlay/Basic'

const code= `
<div class="card card--overlay">
    <div class="card__image">
        <img src="..." />
    </div>
    <div class="darken"></div>
    <div class="card__content">
        <header class="card__header">
            <h4 class="card__title">Card Title</h4>
        </header>
        <div class="card__text">Lorem...</div>
    </div>
</div>
`.trim()
export const OverlayBasicCode = () => (
    <Section title="Text Overlay" cssClasses="l-ui l-ui--overlay">
        <div className="ui">
            <div className="ui__visual">
                <OverlayBasic
                    id="3"
                    title="Card Title"
                    text="Lorem usce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue."
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