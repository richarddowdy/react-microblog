import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function AddPostForm() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    body: ""
  });

  const handleSubmit = evt => {

  }

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }));
  }

  return (
    <div className="AddPostForm">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label><br />
          <input className="form-control" type="text" id="title" name="title" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label><br />
          <input className="form-control" type="text" id="description" name="description" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="body">Body</label><br />
          <textarea className="form-control" type="textarea" id="body" name="body" onChange={handleChange} />
        </div>
        <input type="submit" value="Submit" className="btn btn-primary" />
        &nbsp;
        <Link to="/" className="btn btn-secondary">Cancel</Link>
      </form>
    </div>
  )
}

export default AddPostForm;