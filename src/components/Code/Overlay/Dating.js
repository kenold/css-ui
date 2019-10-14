import React from 'react';
import {PrismCode} from "~components/prismCode"
import Section from '~components/section'
import OverlayDating from '~components/Card/Overlay/Dating'

const code= `
<div class="card card--overlay card--overlay--dating">
	<div class="card__image">
		<img src="..." />
	</div>
	<div class="darken"></div>
	<div class="card__content">
		<div class="card__title model">
			<span class="model__name">Melia Yang, </span>
			<span class="model__age">{27</span>
		</div>
		<div class="card__text">Lorem...</div>
		<div class="card__actions swipe">
			<div class="swipe__left"><i class="fas fa-times"></div>
			<div class="swipe__right"><i class="fas fa-heart"></div
		</div>
	</div>
</div>
`.trim()
export const OverlayDatingCode = () => (
    <Section title="Overlay Dating Swipe" cssClasses="l-ui l-ui--overlay-dating">
        <div className="ui">
            <div className="ui__visual">
                <OverlayDating
                    id="1"
					name="Melia Yang"
                    age="27"
                    text="Donec ut dolor morbi vel lectus ciso"
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