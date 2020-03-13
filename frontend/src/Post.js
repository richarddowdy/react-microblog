import React, {useEffect} from 'react';
import { useParams, Redirect, Link, useHistory} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import CommentsContainer from './CommentsContainer';
import {getSinglePostFromApi} from './actionCreators';
import {remove_post} from './actions';


function Post() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    console.log("in useeffect", id);
    dispatch(getSinglePostFromApi(id))
  }, [dispatch, id]);

  let mainPost = useSelector(store => store.post);

  const handleDelete = () => {
    dispatch(remove_post(id))
    history.push("/")
  }

  return (
    
    <div className="Post">
      {mainPost ?
      <div>
        <h1>{mainPost.title}</h1>
        <h3>{mainPost.description}</h3>
        <p>{mainPost.body}</p>
        <Link to={`/edit/${mainPost.id}`}>Edit</Link>
        <button onClick={handleDelete}>Delete</button>
        <CommentsContainer post={mainPost} />
      </div>
      : null //<Redirect to="/notfound"/>
      }
    </div>

  )
}

export default Post;