import React from 'react'
import StackedBasic from '~components/Card/Stacked/Basic'
import { StackedBasicCode } from '~components/Code/Stacked/Basic'
import Layout from "~components/layout"
import SEO from "~components/seo"
import Section from '~components/section'

const CardIndexPage = () => {
    return (
        <Layout>
		    <SEO title="Card UI Instructions" />
            <Section title="Card UI: Stacked" cssClasses="l-ui l-ui--stacked">
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
                        <StackedBasicCode />
                    </div>
                </div>
            </Section>
        </Layout>
    )
}

export default CardIndexPage