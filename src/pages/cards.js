import React from "react"

// cards component
import Blog from '../components/cards/blog';
import BlogMinimal from '../components/cards/blogMinimal';
import BlogLabel from '../components/cards/blogLabel';
import Cta from '../components/cards/cta';
import BlogWide from '../components/cards/blogWide';
import Movie from '../components/cards/movie';
import Dating from '../components/cards/dating';
import Product from '../components/cards/product';
import Video from '../components/cards/video';
import VideoHover from '../components/cards/videoHover';
import Testimonial from '../components/cards/testimonial';

import '../styles/cards/cards.scss';

import Layout from "../components/layout"
import SEO from "../components/seo"

const Cards = () => (
	<Layout>
		<SEO title="Cards" />
		<Blog />
		<BlogLabel />
		<BlogWide />
		<BlogMinimal />
		<Cta />
		<Movie />
		<Dating />
		<Product />
		<Video />
		<VideoHover />
		<Testimonial />
	</Layout>
)

export default Cards
