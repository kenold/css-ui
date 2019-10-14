import React from 'react';
import {PrismCode} from "~components/prismCode"
import Section from '~components/section'
import StackedSocial from '~components/Card/Stacked/Social'

const code= `
<div class="card card--social">
    <header class="card__header user">
        <div class="user__avatar"><img src="..." /></div>
        <div class="username-date">
            <div clas="user__name">Jane Doe</div>
            <div class="card__date">Yesterday at 12:31 PM</div>
        </div>
        <div class="more-link"><i class="fas fa-ellipsis-v"></i></div>
    </header>
    <div class="card__content">
        <div class="card__text">Lorem..</div>
        <div class="card__image"><img src="..." /></div>
    </div>
    <footer class="card__footer action">
        <div class="action__like">
            <span class="icon"><i class="fas fa-thumbs-up"></i></span>
            <span class="count">3.7K</span>
        </div>
        <div class="action__comment">
            <span class="icon"><i class="far fa-comment-alt"></i></span>
            <span class="count">178</span>
        </div>
    </footer>
</div>
`.trim()
export const StackedSocialCode = () => (
    <Section title="Social Post" cssClasses="l-ui l-ui--stacked-social">
        <div className="ui">
            <div className="ui__visual">
                <StackedSocial
                    id={3}
                    username="Jane Doe"
                    text="Volutpat sapien arcu sed augue. diam id ornare imperdiet, sapien urna pretium nisl."
                    likeCount="4.3K"
                    commentCount="1.8K"
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