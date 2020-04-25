import React from 'react';
import { Link } from 'react-router-dom';
import './PostCard.css'

function PostCard({post}) {
  
  console.log(post)
  return (
    <div className="PostCard col-5 mb-4 border rounded">
      <h1><Link to={`/posts/${post.id}`} >{post.title}</Link></h1>
      <h3>{post.description}</h3>
      <h5>Votes: {post.votes}</h5>
    </div>

  )
}

export default PostCard;