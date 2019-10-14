import React from 'react'
import Layout from "~components/layout"
import SEO from "~components/seo"
import { Link } from "gatsby"

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
            <section className="intro">
                <div className="container">
                    <h1 className="intro__heading">A Collection of free HTML and <span className="accent">CSS card</span> UI components with examples.</h1>
                    <p className="intro__text">Now go build something great!</p>
                    <div className="intro__link">
                        <Link to="/card/examples" className="btn btn--primary">See Examples</Link>
                    </div>
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