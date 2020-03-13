import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PostCard from './PostCard';
// import MicroblogApi from './MicroblogApi';
import {getPostsFromApi} from './actionCreators';

function TitleList() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getPostsFromApi())
  }, [dispatch]);
  
  const posts = useSelector(store => store.posts);

  return (
    <div className="TitleList">
      {posts? 
      posts.map(post => {
        {console.log(post.id)}
        return <PostCard post={post} key={post.id} />
        }) : null }
    </div>
  )
}

export default TitleList;