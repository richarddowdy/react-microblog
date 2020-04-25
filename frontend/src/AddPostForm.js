import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addPostApi } from './actionCreators';

function AddPostForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    body: "",
    comments: []
  });

  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch(addPostApi({...formData}));
    history.push({
      pathname: `/`, 
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
    <div className="AddPostForm row">
      <form onSubmit={handleSubmit} className="col-12">
        <div className="form-group">
          <label htmlFor="title">Title</label><br />
          <input className="form-control col-9 m-auto" type="text" id="title" name="title" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label><br />
          <input className="form-control col-9 m-auto" type="text" id="description" name="description" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="body">Body</label><br />
          <textarea className="form-control col-9 m-auto" type="textarea" id="body" name="body" onChange={handleChange} />
        </div>
        <input type="submit" value="Submit" className="btn btn-primary" />
        &nbsp;
        <Link to="/" className="btn btn-secondary">Cancel</Link>
      </form>
    </div>
  )
}

export default AddPostForm;