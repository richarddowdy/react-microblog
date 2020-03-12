import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CommentsContainer from './CommentsContainer';


function Post() {
  const { id } = useParams();
  
  let mainPost = useSelector(store => store.posts.find(post => (post.id === +id)));

  return (
    <div className="Post">
      <h1>{mainPost.title}</h1>
      <h3>{mainPost.description}</h3>
      <p>{mainPost.body}</p>
      <CommentsContainer post={mainPost} />
    </div>

  )
}

export default Post;