import axios from "axios";
import {
  FETCH_POST
} from "./types";

const API_URL = process.env.REACT_APP_API_URL;
const API_URL_GRAPHCMS = process.env.REACT_APP_API_URL_GRAPHCMS;

var queryDetail = `
query Get_Post($id: ID!) {
  getPost(id: $id) { id, title, summary, content, photo, comments{id}, createdAt, updatedAt, status, user { id, email, name }}
}
`;

var queryDetailGraphCMS = `
query Get_Post($id: ID!) {
  post(where: {id: $id}) {
    id,photo,title,summary,content{text},comments{id}
    updatedAt,createdAt
    author {id,name,email}
  }
}
`;

export function getPostFromAPI(id) {
  return async function (dispatch) {
    const response = await axios.post(API_URL, { query: queryDetail, variables: { id } });
    return dispatch(getPost(response.data.data.getPost));
  };
}

function getPost(post) {
  return {
    type: FETCH_POST,
    post: post || {},
  };
}

export function getPostFromAPIGraphCMS(id) {
  return async function (dispatch) {
    const response = await axios.post(API_URL_GRAPHCMS, { query: queryDetailGraphCMS, variables: { id } });
    return dispatch(getPost(response.data && response.data.data && response.data.data.post));
  };
}

