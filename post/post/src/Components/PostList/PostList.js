import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../redux/actions";
import PostCard from "../PostCard/PostCard";

const PostList = () => {
  const { posts, loading } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, []);
  return (
    <div >
      <h1>Home page</h1>
      {loading ? (
        <div>
          {" "}
          <h1> loading...</h1>{" "}
        </div>
      ) : (
        <div className="cardlist__posts">
          {posts.map((post, index) => (
            <PostCard post={post} key={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PostList;