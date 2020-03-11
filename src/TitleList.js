import React from 'react';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
import PostCard from './PostCard';


function TitleList() {
  const posts = useSelector(store => store.posts);
  console.log(posts)
  return (
    <div className="TitleList">
      {posts.map(post => <PostCard post={post} key={post.id} />)}
    </div>
  )
}

export default TitleList;