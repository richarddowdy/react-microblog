import React from 'react';
import CommentsForm from './CommentsForm';


function CommentsContainer({ post }){

  const { comments, id } = post;
  
  return(
    <div className="CommentsContainer">
      <h3>Comments</h3>
      <div>
        {comments ? comments.map(comment => <p>{comment}</p>) : null }
        <h4>Add a Comment</h4>
      </div>
      <CommentsForm postId={id} />
    </div>
  )
}

export default CommentsContainer;