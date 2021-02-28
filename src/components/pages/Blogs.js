import React from 'react';
import ListPost from "../parts/ListPost";

function Blogs() {
    return (
        <section className="blog-list px-3 py-5 p-md-5">
            <ListPost is_GraphCMS={false} />
        </section>
    );
}


export default Blogs;