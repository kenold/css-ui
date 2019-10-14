import React from 'react'
import Layout from "~components/layout"
import SEO from "~components/seo"
import { StackedBasicCode } from '~components/Code/Stacked/Basic'
import { StackedSocialCode } from '~components/Code/Stacked/Social'
import { StackedOverlapCode } from '~components/Code/Stacked/Overlap'
import { StackedTourCode } from '~components/Code/Stacked/Tour'

const CardIndexPage = () => {
    return (
        <Layout>
		    <SEO title="Card UI Instructions" />
            <StackedBasicCode />
            <StackedSocialCode />
            <StackedOverlapCode />
            <StackedTourCode />
        </Layout>
    )
}

export default CardIndexPage