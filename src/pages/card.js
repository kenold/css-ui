import React from "react"

// cards component
import Stacked from '~components/Card/Stacked';
import Social from '~components/Card/Social';
import StackedOverlap from '~components/Card/StackedOverlap';
import StackedTour from '~components/Card/StackedTour';
import StackedExpand from '~components/Card/StackedExpand';
import StackedMinimal from '~components/Card/StackedMinimal';
import StackedMinimalThemed from '~components/Card/StackedMinimalThemed';
import StackedBadge from '~components/Card/StackedBadge';
import StackedFloat from '~components/Card/StackedFloat';
import CtaList from '~components/Card/Stacked/Cta/List';
import Horizontal from '~components/Card/Horizontal';
import HorizontalFlipped from "~components/Card/HorizontalFlipped";
import HorizontalVideo from '~components/Card/HorizontalVideo';
import HorizontalMusicPlayer from '~components/Card/HorizontalMusicPlayer';
import Overlay from '~components/Card/Overlay';
import OverlayDating from '~components/Card/OverlayDating';
import OverlayProduct from '~components/Card/OverlayProduct';
import Video from '~components/Card/Video';
import VideoHover from '~components/Card/VideoHover';
import Testimonial from '~components/Card/Testimonial';

import Layout from "~components/layout"
import SEO from "~components/seo"

const Card = () => (
	<Layout>
		<SEO title="Cards" />
		<Stacked />
		<Social />
		<StackedOverlap />
		<StackedTour />
		<StackedExpand />
		<StackedBadge />
		<StackedFloat />
		<StackedMinimal />
		<StackedMinimalThemed />
		<Horizontal />
		<HorizontalFlipped />
		<HorizontalVideo />
		<HorizontalMusicPlayer />
		<CtaList />
		<Overlay />
		<OverlayDating />
		<OverlayProduct />
		<Video />
		<VideoHover />
		<Testimonial />
	</Layout>
)

export default Card
