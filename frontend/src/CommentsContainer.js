import React from 'react';
import CommentsForm from './CommentsForm';
import { useDispatch } from 'react-redux';
import {delete_comment} from './actions';


function CommentsContainer({ post, deleteComment }){

  const { comments, id } = post;
  // const dispatch = useDispatch();

  // const handleDelete = ( commentId ) => {
  //   let payload = {id, commentId};
  //   console.log("deleting a comment", payload)
  //   dispatch(delete_comment(payload));
  // }

  console.log("comment container", post);
  return(
    <div className="CommentsContainer col-12 text-center">
      <h3>Comments</h3>
      <div>
        {comments.length ? 
          comments.map(comment =>
            <p key={comment.id}>
                <button onClick={() => deleteComment(id, comment.id)}>X</button>{comment.text}
            </p>) : null }
        <h4>Add a Comment</h4>
      </div>
      {/* <CommentsForm postId={id} /> */}
    </div>
  )
}

export default CommentsContainer;