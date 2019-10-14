import React from 'react'
import Layout from "~components/layout"
import SEO from "~components/seo"
import { StackedBasicCode } from '~components/Code/Stacked/Basic'
import { StackedSocialCode } from '~components/Code/Stacked/Social'

const CardIndexPage = () => {
    return (
        <Layout>
		    <SEO title="Card UI Instructions" />
            <StackedBasicCode />
            <StackedSocialCode />
        </Layout>
    )
}

export default CardIndexPage