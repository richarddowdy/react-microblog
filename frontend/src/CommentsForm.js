import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {add_comment} from './actions';
import {v4 as uuid} from 'uuid';

function CommentsForm({postId}) {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    text: ""
  });

  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch(add_comment({...formData, id: postId, commentId: uuid()}));
    setFormData({text: ""})
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
          <input className="form-control" value={formData.text} type="text" id="text" name="text" onChange={handleChange} />
        </div>
        <input type="submit" value="Submit" className="btn btn-primary" />
      </form>
    </div>
  )
}

export default CommentsForm;