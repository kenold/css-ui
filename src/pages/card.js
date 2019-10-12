import React from "react"

// card components
import StackedBasicList from '~components/Card/Stacked/BasicList';
import StackedSocialList from '~components/Card/Stacked/SocialList';
import StackedOverlapList from '~components/Card/Stacked/OverlapList';
import StackedTourList from '~components/Card/Stacked/TourList';
import StackedMediaObejectList from '~components/Card/Stacked/MediaObjectList';
import StackedMinimalThemedList from '~components/Card/Stacked/MinimalThemedList';
import StackedBadgeList from '~components/Card/Stacked/BadgeList';
import StackedBadgeVideoList from '~components/Card/Stacked/BadgeVideoList';
import StackedFloatList from '~components/Card/Stacked/FloatList';
import StackedCtaList from '~components/Card/Stacked/CtaList';
import StackedTestimonialList from '~components/Card/Stacked/TestimonialList';
import Horizontal from '~components/Card/Horizontal';
import HorizontalFlipped from "~components/Card/HorizontalFlipped";
import HorizontalVideo from '~components/Card/HorizontalVideo';
import HorizontalMusicPlayer from '~components/Card/HorizontalMusicPlayer';
import OverlayMovieList from '~components/Card/Overlay/MovieList';
import OverlayDatingList from '~components/Card/Overlay/DatingList';
import OverlayProductList from '~components/Card/Overlay/ProductList';
import OverlayVideoList from '~components/Card/Overlay/VideoList';

import Layout from "~components/layout"
import SEO from "~components/seo"

const Card = () => (
	<Layout>
		<SEO title="Cards" />
		<StackedBasicList />
		<StackedSocialList />
		<StackedOverlapList />
		<StackedTourList />
		<StackedMediaObejectList />
		<StackedBadgeList />
		<StackedFloatList />
		<StackedMinimalThemedList />
		<Horizontal />
		<HorizontalFlipped />
		<HorizontalVideo />
		<HorizontalMusicPlayer />
		<StackedCtaList />
		<OverlayMovieList />
		<OverlayDatingList />
		<OverlayProductList />
		<OverlayVideoList />
		<StackedBadgeVideoList />
		<StackedTestimonialList />
	</Layout>
)

export default Card
