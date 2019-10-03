import React from "react"

// cards component
import Stacked from '../components/Card/Stacked';
import StackedMinimal from '../components/Card/StackedMinimal';
import StackedLabel from '../components/Card/StackedLabel';
import Cta from '../components/Card/Cta';
import Horizontal from '../components/Card/Horizontal';
import HorizontalFlipped from "../components/Card/HorizontalFlipped";
import HorizontalVideo from '../components/Card/HorizontalVideo';
import Overlay from '../components/Card/Overlay';
import OverlayDating from '../components/Card/OverlayDating';
import OverlayProduct from '../components/Card/OverlayProduct';
import Video from '../components/Card/Video';
import VideoHover from '../components/Card/VideoHover';
import Testimonial from '../components/Card/Testimonial';

import '../styles/cards/cards.scss';

import Layout from "../components/layout"
import SEO from "../components/seo"

const Card = () => (
	<Layout>
		<SEO title="Cards" />
		<Stacked />
		<StackedLabel />
		<StackedMinimal />
		<Horizontal />
		<HorizontalFlipped />
		<HorizontalVideo />
		<Cta />
		<Overlay />
		<OverlayDating />
		<OverlayProduct />
		<Video />
		<VideoHover />
		<Testimonial />
	</Layout>
)

export default Card
