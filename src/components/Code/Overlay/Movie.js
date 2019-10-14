import React from 'react';
import {PrismCode} from "~components/prismCode"
import Section from '~components/section'
import OverlayMovie from '~components/Card/Overlay/Movie'

const code= `
<div class="card card--overlay card--overlay--movie">
	<div class="card__image"><img src="..." /></div>
	<div class="darken"></div>
	<div class="card__notification">Now Streaming</div>
	<div class="card__content">
		<div class="separator"></div>
		<h4 class="card__title">Card Title</h4>
		<p class="card__text">Lorem...</p>
		<div class="card__actions">
			<div class="btn btn--primary">
				<span class="icon"><i class="fas fa-play"></span>
				<span class="btn__text">Play</span>
			</div>
			<div class="btn btn--secondary">
				<span class="icon"><i class="fas fa-heart"></span>
				<span class="btn__text">Favorite</span>
			</div>
			<div class="btn btn--ellipsis">
				<span class="icon"><i class="fas fa-ellipsis-h"></i></span>
			</div>
		</div>
	</div>
</div>
`.trim()
export const OverlayMovieCode = () => (
    <Section title="Buttons Overlay" cssClasses="l-ui l-ui--overlay-movie">
        <div className="ui">
            <div className="ui__visual">
                <OverlayMovie
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