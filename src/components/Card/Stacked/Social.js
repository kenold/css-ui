import React from "react";
import { FaThumbsUp, FaRegCommentAlt, FaEllipsisV } from 'react-icons/fa';
import Section from "../../../components/Section"
import SocialData from '~data/social.json';

const StackedSocial = (props) => (
    <article className={"card card--social" + (props.grid ? " " + props.grid:"")}>
        <header className="card__header user">
            <div className="user__avatar">
                <a href="#profile">
                    <img src={"/avatars/" + props.id + ".jpg"} alt={props.username} />
                </a>
            </div>
            <div className="username-date">
                <div className="user__name">
                    <a href="#profile">{props.username}</a>
                </div>
                <div className="card__date">Yesterday at 12:31 PM</div>
            </div>
            <div className="more-link"><a href="#more"><FaEllipsisV /></a></div>
        </header>
        <div className="card__content">
            <div className="card__text">{props.text}</div>
            <div className="card__image">
                <a href="#blog-detail">
                    <img src={"/social/" + props.id + ".jpg"} alt={props.text} />
                </a>
            </div>
        </div>
        <footer className="card__footer action">
            <div className="action__like">
                <a href="#like" title="Like">
                    <span className="icon"><FaThumbsUp /></span>
                    <span className="count">
                        {props.likeCount > 1000 ?
                            (Number(props.likeCount/1000).toFixed(1))+ "K": props.likeCount}
                    </span>
                </a>
            </div>
            <div className="action__comment">
                <a href="#comments" title="Comment">
                    <span className="icon"><FaRegCommentAlt /></span>
                    <span className="count">
                        {props.commentCount > 1000 ?
                            (Number(props.commentCount/1000).toFixed(1)) + "K" : props.commentCount}
                    </span>
                </a>
            </div>
        </footer>
    </article>
)
export default StackedSocial

export const StackedSocialList = () => (
    <Section title="Social">
        <div className="cards">
            {SocialData.slice(0,3).map((post) => (
                <StackedSocial
                    key={post.id}
                    grid="show-1-3"
                    id={post.id}
                    username={post.username}
                    text={post.text}
                    likeCount={post.likeCount}
                    commentCount={post.commentCount}
                />
            ))}
        </div>
    </Section>
)