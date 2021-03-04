import React from 'react';
import ListPost from "../parts/ListPost";

function Home() {
    return (
        <main>
            <section className="cta-section theme-bg-light py-5">
                <div className="container text-center">
                    <h2 className="heading">DevBlog - A Blog Template Made For Developers</h2>
                    <div className="intro">Welcome to my blog. Subscribe and get my latest blog post in your inbox.</div>
                    <form className="signup-form form-inline justify-content-center pt-3">
                        <div className="form-group">
                            <label className="sr-only" htmlFor="semail">Your email</label>
                            <input type="email" id="semail" name="semail1" className="form-control mr-md-1 semail" placeholder="Enter email" />
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={(e) => e.preventDefault()}>Subscribe</button>
                    </form>
                </div>
            </section>

            <section className="blog-list px-3 py-5 p-md-5">
                <ListPost is_GraphCMS={true} />
            </section>

        </main>
    );
}

export default Home;