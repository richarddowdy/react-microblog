import React from 'react';
import { Link } from 'react-router-dom';

function PostCard({post}) {
  
  return (
    <div className="PostCard">
      <h1><Link to={`/posts/${post.id}`} >{post.title}</Link></h1>
      <h3>{post.description}</h3>
    </div>

  )
}

export default PostCard;