import React from "react"

// cards component
import Blog from '../components/cards/blog';
import BlogWide from '../components/cards/blogWide';
import Movie from '../components/cards/movie';
import Product from '../components/cards/product';
import Video from '../components/cards/video';
import Quote from '../components/cards/quote';

import '../styles/cards.scss';

import Layout from "../components/layout"
import SEO from "../components/seo"

const Cards = () => (
	<Layout>
		<SEO title="Cards" />
		<h1>Cards</h1>
		<Blog />
		<Movie />
		<Product />
		<Video />
		<BlogWide />
		<Quote />
	</Layout>
)

export default Cards
