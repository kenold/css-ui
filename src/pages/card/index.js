import React from 'react'
import Layout from "~components/layout"
import SEO from "~components/seo"
import { StackedBasicCode } from '~components/Code/Stacked/Basic'
import { StackedSocialCode } from '~components/Code/Stacked/Social'
import { StackedOverlapCode } from '~components/Code/Stacked/Overlap'
import { StackedTourCode } from '~components/Code/Stacked/Tour'
import { StackedBadgeCode } from '~components/Code/Stacked/Badge'
import { StackedFloatingIconCode } from '~components/Code/Stacked/FloatingIcon'

import { OverlayBasicCode } from '~components/Code/Overlay/Basic'
import { OverlayMovieCode } from '~components/Code/Overlay/Movie'
import { OverlayDatingCode } from '~components/Code/Overlay/Dating'

const CardIndexPage = () => {
    return (
        <Layout>
		    <SEO title="Card UI Instructions" />
            <section class="intro">
                <div className="container">
                    <h2>CSS Card UI Components</h2>
                    <p className="intro__text">lorem</p>
                    <h3>See Examplels</h3>
                </div>
            </section>
            <StackedBasicCode />
            <StackedSocialCode />
            <StackedOverlapCode />
            <StackedTourCode />
            <StackedBadgeCode />
            <StackedFloatingIconCode />

            <OverlayBasicCode />
            <OverlayMovieCode />
            <OverlayDatingCode />
        </Layout>
    )
}

export default CardIndexPage