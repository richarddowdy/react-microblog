import React, { useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateSinglePostApi } from './actionCreators';

function EditPostForm() {

  const dispatch = useDispatch();
  const {id} = useParams();
  const currentPost = useSelector(store => store.post);
  const history = useHistory();

  const [formData, setFormData] = useState({
    id: currentPost.id,
    title: currentPost.title,
    description: currentPost.description,
    body: currentPost.body,
    votes: currentPost.votes,
    comments: currentPost.comments
  });

  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch(updateSinglePostApi(id, {...formData}));
    history.push({
      pathname: `/posts/${id}`, 
      state: {success: true}
    });
  }

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }));
  }

  return (
    <div className="EditPostForm">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label><br />
          <input className="form-control" type="text" id="title" name="title" value={formData.title} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label><br />
          <input className="form-control" type="text" id="description" name="description" value={formData.description} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="body">Body</label><br />
          <textarea className="form-control" type="textarea" id="body" name="body" value={formData.body} onChange={handleChange} />
        </div>
        <input type="submit" value="Submit" className="btn btn-primary" />
        &nbsp;
        <Link to="/" className="btn btn-secondary">Cancel</Link>
      </form>
    </div>
  )
}

export default EditPostForm;