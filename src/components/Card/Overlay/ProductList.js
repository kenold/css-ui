import React from "react";
import Section from '~components/Section'
import Product from './Product'
import ProductData from '~data/products.json'

const ProductList = () => (
    <Section title="Overlay Icon">
        <div className="cards">
            {ProductData.map((product) => (
                <Product
                    key={product.id}
                    cssClasses="show-2-4"
                    id={product.id}
                    title={product.title}
                    topic={product.topic}
                    price={product.price}
                    discount={product.discount}
                />
            ))}
        </div>
    </Section>
)
export default ProductList
