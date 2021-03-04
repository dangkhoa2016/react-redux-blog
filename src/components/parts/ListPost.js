import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getPostsFromAPI, getPostsFromAPIGraphCMS } from './../../actions/posts';
import { Link } from 'react-router-dom';
import PostModal from "./PostModal";

const ListPost = ({ is_GraphCMS }) => {
    const posts = useSelector(st => st.posts);
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);
    const [postId, setPostId] = useState("");
    var [pageIndex, setPageIndex] = useState(1);

    useEffect(function () {
        async function fetchPosts(pageIndex) {
            await dispatch(is_GraphCMS ? getPostsFromAPIGraphCMS(pageIndex) : getPostsFromAPI(pageIndex));
            setIsLoading(false);
        }

        if (isLoading) {
            fetchPosts(pageIndex);
        }

    }, [dispatch, pageIndex, isLoading, is_GraphCMS]);

    function handleClick(is_next) {
        if (is_next) {
            setPageIndex(++pageIndex);
            console.log('load next');
            setIsLoading(true);
        }
        else if (pageIndex > 1) {
            setPageIndex(--pageIndex);
            console.log('load prev');
            setIsLoading(true);
        }
    }

    function scrollTop() {
        // eslint-disable-next-line
        $("body > .postModal").animate({ scrollTop: 0 }, 'slow');
    }

    function setOtherPost(is_next) {
        if (postId && posts.length > 0) {
            var index = posts.findIndex(n => n.id === postId);
            if (is_next && index < posts.length - 1) {
                scrollTop();
                setPostId(posts[index + 1].id);
            } else if (!is_next && index > 0) {
                scrollTop();
                setPostId(posts[index - 1].id);
            }
        }
    }

    if (isLoading) return <b>Loading...</b>;

    if (!isLoading && posts.length === 0) {
        return (<div>
            <b>No posts found!</b>
            {(pageIndex > 1) ? <nav className="blog-nav nav nav-justified my-5">
                <Link className="nav-link-prev nav-item nav-link rounded-left" onClick={(e) => handleClick(false, e)}
                    to="#">Newer posts <i className="arrow-prev fas fa-long-arrow-alt-left"></i></Link>
            </nav> : null}
        </div>);
    }

    return (
        <div className="container">
            <div id="blogs-list">
                {posts.map(post => (
                    <div className="item mb-5" key={post.id}>
                        <div className="media">
                            <img className="mr-3 img-fluid post-thumb d-none d-md-flex" src={post.photo} alt={post.title} />
                            <div className="media-body">
                                <h3 className="title mb-1">
                                    <Link to="#" onClick={(e) => setPostId(post.id, e)}>{post.title}</Link>
                                </h3>
                                <div className="meta mb-1">
                                    <span className="date">Published 3 months ago</span>
                                    <span className="comment">
                                        <Link to="#" onClick={(e) => setPostId(post.id, e)}>{post.comments.length} comments</Link>
                                    </span>
                                </div>
                                <div className="intro">{post.summary}</div>
                                <Link className="more-link" to="#" onClick={(e) => setPostId(post.id, e)}>Read more &rarr;</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <nav className="blog-nav nav nav-justified my-5">
                <Link className="nav-link-prev nav-item nav-link rounded-left" onClick={(e) => handleClick(false, e)}
                    to="#">Newer posts <i className="arrow-prev fas fa-long-arrow-alt-left"></i></Link>
                <Link className="nav-link-next nav-item nav-link rounded-right" onClick={(e) => handleClick(true, e)}
                    to="#">Older posts <i className="arrow-next fas fa-long-arrow-alt-right"></i></Link>
            </nav>

            <PostModal is_GraphCMS={is_GraphCMS} postId={postId} callOnHide={(e) => setPostId("")} callOtherPost={(is_next, e) => setOtherPost(is_next)} />
        </div>
    );
}

export default ListPost;
