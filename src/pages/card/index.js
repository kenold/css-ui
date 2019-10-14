import React from 'react'
import { StackedBasicCode } from '~components/Code/Stacked/Basic'
import Layout from "~components/layout"
import SEO from "~components/seo"

const CardIndexPage = () => {
    return (
        <Layout>
		    <SEO title="Card UI Instructions" />
            <StackedBasicCode />
        </Layout>
    )
}

export default CardIndexPage