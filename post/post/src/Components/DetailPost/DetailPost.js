import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';

const DetailPost = ({ PostList, match }) => {
    console.log(PostList);
    console.log(match)
  return (
    <div>
        <h1>Details</h1>
      {PostList
        .filter((post) => post._id === match.params.id)
        .map((post, index) => (
            <Card key={index} style={{ width: '25rem' }} className="bg-dark text-white">
               <Card.Body className="carb">
                    <Card.Title>Title : {post.title}</Card.Title>
                    <Card.Text>ID : {post.id}</Card.Text>
                    <Card.Text>Type : {post.type}</Card.Text>
                    <Card.Text>URL : {post.url}</Card.Text>
                    <Button variant="success"> <Link to="/">Go back</Link></Button>
                </Card.Body>
            </Card>
          
        ))}
  </div>);
};

export default DetailPost;