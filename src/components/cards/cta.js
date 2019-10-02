import React from "react"
// import BlogCode from '../codes/blog';
import BlogData from '../../data/posts.json';

const Cta = () => (
    <section className="l-cards l-cards--cta container">
        <div className="l-cards__heading">
            <h4>Cards + Call-to-Action </h4>
        </div>

        <div className="cards">
            {BlogData.slice(0, 3).map((post) => (
                <article key={post.id} className="card card--cta show-1-3">
                    <a href="#cta-detail">
                        <div className="card__body">
                            <div className="card__title" title={post.title}>
                                {post.title}
                            </div>
                            <div className="card__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero beatae.</div>
                        </div>
                    </a>
                    <div className="card__footer btn">
                        <a href="#signup"><div className="btn__primary">Sign up</div></a>
                        <a href="#learn-more"><div className="btn__secondary">Learn more</div></a>
                    </div>
                </article>
            ))}
        </div>

        <div className="code">

        </div>
    </section>
)

export default Cta
