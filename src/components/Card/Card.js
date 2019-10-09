import React from 'react'
import CardImage from './Image'
import CardContent from './Content'
// TODO: delete this component
export default function Card() {
    return (
        <article className="card show-1-3">
            <CardImage
                title={post.title}
                image={"/blog-wide/" + (post.id+8) + ".jpg"}
            />
            <CardContent
                topic={post.topic}
                title={post.title}
                author={post.author}
                date={post.date}
            />
        </article>
    )
}
