import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';



function Post() {
  const { id } = useParams();
  const history = useHistory();
  // console.log(history);
  const post = useSelector(store => store.posts.find(post => post.id === id));
  return (
    <div className="Post">
      <h1>{post.title}</h1>
      <h3>{post.description}</h3>
      <p>{post.body}</p>
    </div>

  )
}

export default Post;