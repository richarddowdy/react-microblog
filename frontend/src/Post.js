import React, {useEffect} from 'react';
import { useParams, Redirect, Link, useHistory} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import CommentsContainer from './CommentsContainer';
import CommentsForm from './CommentsForm';
import {getSinglePostFromApi, addCommentToApi, deleteCommentApi } from './actionCreators';
import {remove_post} from './actions';


function Post() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  let mainPost = useSelector(store => store.post);

  useEffect(() => {
    console.log("in useeffect", id);
    dispatch(getSinglePostFromApi(id))
  }, [dispatch, id]);


  const handleDelete = () => {
    dispatch(remove_post(id))
    history.push("/")
  }

  function addComment(postId, text){
    dispatch(addCommentToApi({postId, text}));
  }

  function deleteComment(postId, commentId){
    dispatch(deleteCommentApi({postId, commentId}));
  }


  return (
    
    <div className="Post row">
      {mainPost ?
      <div className="col-9 m-auto">
        <div className=" float-right">
          <Link className="btn btn-primary m-2"to={`/edit/${mainPost.id}`}>Edit</Link>
          <button className="btn btn-danger m-2" onClick={handleDelete}>Delete</button>
        </div>
        <div className="">
          <h1 className="">{mainPost.title}</h1>
          <h3>{mainPost.description}</h3>
          <p>{mainPost.body}</p>
          <CommentsContainer post={mainPost} deleteComment={deleteComment}/>
          <CommentsForm addComment={addComment} postId={mainPost.id} />
        </div>
      </div>
      : null //<Redirect to="/notfound"/>
      }
    </div>

  )
}

export default Post;