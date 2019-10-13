import React from "react"
import Layout from "~components/layout"
import SEO from "~components/seo"

// importbcard components using ~Card alias from gatsby-node.js
import { StackedBasicList } from '~Card/Stacked/Basic';
import { StackedSocialList } from '~Card/Stacked/Social';
import { StackedOverlapList } from '~Card/Stacked/Overlap';
import { StackedTourList } from '~Card/Stacked/Tour';
import { StackedMediaObjectList } from '~Card/Stacked/MediaObject';
import { StackedMinimalThemedList } from '~Card/Stacked/MinimalThemed';
import { StackedBadgeList } from '~Card/Stacked/Badge';
import { StackedFloatingIconList } from '~Card/Stacked/FloatingIcon';
import { StackedCtaList } from '~Card/Stacked/Cta';
import { StackedTestimonialList } from '~Card/Stacked/Testimonial';
import { StackedBadgeVideoList } from '~Card/Stacked/BadgeVideo';

import HorizontalBasic from '~Card/Horizontal/Basic';
import HorizontalReverse from "~Card/Horizontal/Reverse";
import HorizontalVideo from '~Card/Horizontal/Video';
import HorizontalMusicPlayer from '~Card/Horizontal/MusicPlayer';

import { OverlayMovieList } from '~Card/Overlay/Movie';
import { OverlayDatingList } from '~Card/Overlay/Dating';
import { OverlayVideoList } from '~Card/Overlay/Video';
import { OverlayProductList } from '~Card/Overlay/Product';

const Card = () => (
	<Layout>
		<SEO title="Card Examples" />
		<StackedBasicList />
		<StackedSocialList />
		<StackedOverlapList />
		<StackedTourList />
		<StackedMediaObjectList />
		<StackedBadgeList />
		<StackedFloatingIconList />
		<StackedMinimalThemedList />
		<StackedBadgeVideoList />
		<StackedTestimonialList />
		<StackedCtaList />
		<HorizontalBasic />
		<HorizontalReverse />
		<HorizontalVideo />
		<HorizontalMusicPlayer />
		<OverlayMovieList />
		<OverlayDatingList />
		<OverlayProductList />
		<OverlayVideoList />
	</Layout>
)

export default Card
