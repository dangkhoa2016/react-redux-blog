import axios from 'axios';
import { FETCH_POSTS } from "./types";
const API_URL = process.env.REACT_APP_API_URL;
const API_URL_GRAPHCMS = process.env.REACT_APP_API_URL_GRAPHCMS;

var queryList = `
query Get_Posts($page_index: Int) {
  posts(page_index: $page_index) { id, title, summary, photo, comments{id}, createdAt, updatedAt, status, user { id, email, name }}
}
`;

var queryListGraphCMS = `
query Get_Posts($first: Int, $skip: Int) {
  posts(first: $first, skip: $skip, where: {state: "active"}) {
    id,photo,title,summary,comments{id}
    updatedAt,createdAt
    author {id,name,email}
  }
}
`;

export function getPostsFromAPI(page_index) {
    return async function (dispatch) {
        const response = await axios.post(API_URL, { query: queryList, variables: { page_index: (page_index || 1) } });
        return dispatch(getPosts(response.data.data.posts));
    };
}

function getPosts(posts) {
    return {
        type: FETCH_POSTS,
        posts,
    };
}


var page_size_GraphCMS = 5;
export function getPostsFromAPIGraphCMS(page_index) {
    page_index = page_index || 1;
    if (page_index < 1)
        page_index = 1;
    var skip = (page_index - 1) * page_size_GraphCMS;

    return async function (dispatch) {
        const response = await axios.post(API_URL_GRAPHCMS, { query: queryListGraphCMS, variables: { 'first': page_size_GraphCMS, skip } });
        return dispatch(getPosts(response.data.data.posts));
    };
}
