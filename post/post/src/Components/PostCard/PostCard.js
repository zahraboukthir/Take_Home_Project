import React from "react";
import { useDispatch } from "react-redux";
import { deletePost, getPosts  } from "../../redux/actions";
import { Card, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  console.log(post)
  const dispatch = useDispatch();
  return (
    <div className="card" >
         <Card style={{ width: '25rem' }} className="bg-dark text-white">
                <Card.Body className="carb">
                    <Card.Title>Title : {post.title}</Card.Title>
                    <button variant="primary">
              <Link to={`/Details/${post._id}`}>Details</Link>
            </button>
                    <Button variant="success" onClick={() => {
          dispatch(deletePost(post._id));
          dispatch(getPosts());
        }}> Delete</Button>
                </Card.Body>
            </Card>
    </div>
  );
};

export default PostCard;
