import {
    FETCH_POSTS,
} from "../actions/types";

export default function rootReducer(state = [], action) {
    switch (action.type) {

        case FETCH_POSTS:
            return action.posts;

        default:
            return state;
    }
}
