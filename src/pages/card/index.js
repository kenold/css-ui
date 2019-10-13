import React from 'react'
import StackedBasic from '~components/Card/Stacked/Basic'
import StackedBasicCode from '~components/Code/Stacked/Basic'
import Layout from "~components/layout"
import SEO from "~components/seo"
import Section from '~components/section'

const CardIndexPage = () => {
    return (
        <Layout>
		    <SEO title="Card UI Instructions" />
            <Section title="Cards UI" cssClasses="l-ui l-ui--stacked">
                <div className="ui">
                    <div className="ui__visual">
                        <StackedBasic
                            id={8}
                            title="Card Title"
                            topic="Topic"
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