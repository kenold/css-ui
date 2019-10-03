import React from "react"

// cards component
import Stacked from '../components/cards/Stacked';
import StackedMinimal from '../components/cards/StackedMinimal';
import StackedLabel from '../components/cards/StackedLabel';
import Cta from '../components/cards/Cta';
import Horizontal from '../components/cards/Horizontal';
import Overlay from '../components/cards/Overlay';
import OverlayDating from '../components/cards/OverlayDating';
import OverlayProduct from '../components/cards/OverlayProduct';
import Video from '../components/cards/Video';
import VideoHover from '../components/cards/VideoHover';
import Testimonial from '../components/cards/Testimonial';

import '../styles/cards/cards.scss';

import Layout from "../components/layout"
import SEO from "../components/seo"

const Cards = () => (
	<Layout>
		<SEO title="Cards" />
		<Stacked />
		<StackedLabel />
		<StackedMinimal />
		<Horizontal />
		<Cta />
		<Overlay />
		<OverlayDating />
		<OverlayProduct />
		<Video />
		<VideoHover />
		<Testimonial />
	</Layout>
)

export default Cards
