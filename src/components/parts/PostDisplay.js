import React from 'react';
import { Link } from 'react-router-dom';
import "./PostDisplay.css";

/** Display a post:
 *
 * - show edit/delete buttons (& call parent on action)
 * - show vote count and +/- buttons (& call parent on action)
 *
 */

function PostDisplay({ post, callOtherPost }) {
    const { title, summary, content, photo, comments } = (post || {});

    return (
        <article className="blog-post px-3 py-5 p-md-5">
            <div className="container">
                <header className="blog-post-header">
                    <h2 className="title mb-2">{title}</h2>
                    <div className="meta mb-3"><span className="date">Published 3 months ago</span><span className="comment">
                        <Link to="#">{comments.length} comments</Link></span>
                    </div>
                </header>

                <div className="blog-post-body">
                    <figure className="blog-banner">
                        <Link to={photo}><img className="img-fluid" src={photo} alt={title} /></Link>
                    </figure>
                    <p>{summary}</p>
                    <div dangerouslySetInnerHTML={{ __html: (content.text ? content.text : content) }}></div>
                </div>

                <nav className="blog-nav nav nav-justified my-5">
                    <Link className="nav-link-prev nav-item nav-link rounded-left" onClick={(e) => callOtherPost(false)} to="#">Previous <i className="arrow-prev fas fa-long-arrow-alt-left"></i></Link>
                    <Link className="nav-link-next nav-item nav-link rounded-right" onClick={(e) => callOtherPost(true)} to="#">Next <i className="arrow-next fas fa-long-arrow-alt-right"></i></Link>
                </nav>
            </div>
        </article>
    );
}

export default PostDisplay;