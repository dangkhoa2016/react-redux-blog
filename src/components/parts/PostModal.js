import React, { useState } from "react";
import { Modal, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux";
import { getPostFromAPI, getPostFromAPIGraphCMS } from "./../../actions/post";
import PostDisplay from "./PostDisplay";

const PostModal = ({ postId, callOnHide, callOtherPost, is_GraphCMS }) => {
    const [show, setShow] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isClose, setIsClose] = useState(false);

    const handleExit = () => {
        setIsClose(false);
        if (callOnHide)
            callOnHide();
    }

    const dispatch = useDispatch();
    var post = useSelector(st => st.post[postId]);

    if (postId) {
        if (show === false && isClose === false)
            setShow(true);
        else {
            if (post) {
                if (isLoading === true)
                    setIsLoading(false);
            }
            else {
                if (isLoading === false) {
                    setIsLoading(true);
                    dispatch(is_GraphCMS ? getPostFromAPIGraphCMS(postId) : getPostFromAPI(postId));
                }
            }
        }
    }

    const handleClose = () => {
        setIsClose(true);
        setShow(false);
    };

    return (
        <>
            <Modal size="lg"
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false} className="postModal"
                onExited={handleExit}
            >
                <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {isLoading ? `Loading post: ${postId}` : (post ? <PostDisplay post={post} callOtherPost={callOtherPost} /> : '<b>Post not found.</b>')}
                </Modal.Body>
                <Modal.Footer className="justify-content-between">
                    <Button variant="primary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default PostModal;
