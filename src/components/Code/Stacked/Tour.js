import React from 'react';
import {PrismCode} from "~components/prismCode"
import Section from '~components/section'
import StackedTour from '~components/Card/Stacked/Tour'

const code= `
<div class="card card--tour">
	<div class="card__image"><img src="..." /></div>
	<div class="card__content">
		<header class="card__header">
			<div class="card__topic">
				<i class="fas fa-map-marker-alt"></i> /> Paris
			</div>
			<h4 class="card__title" >Eiffel Tower</h4>
		</header>
        <p class="card__text card__text--small">
            Lorem sapien arcu sed augue...
        </p>
		<div class="card__subtext"><span>from</span> $299</div>
	</div>
</div>
`.trim()
export const StackedTourCode = () => (
    <Section title="Tour" cssClasses="l-ui l-ui--stacked-tour">
        <div className="ui">
            <div className="ui__visual">
                <StackedTour
                    cssClasses="card--tour"
                    id="3"
                    title="Eiffel Tower"
                    topic="Paris"
                    text="Lorem sapien arcu sed augue..."
                    price="299"
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