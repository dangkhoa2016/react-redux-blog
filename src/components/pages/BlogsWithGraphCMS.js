import React from 'react';
import ListPost from "../parts/ListPost";

function BlogsWithGraphCMS() {
    return (
        <section className="blog-list px-3 py-5 p-md-5">
            <ListPost is_GraphCMS={true} />
        </section>
    );
}


export default BlogsWithGraphCMS;