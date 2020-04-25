import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {add_comment} from './actions';
import {v4 as uuid} from 'uuid';
import { addCommentToApi } from './actionCreators';

function CommentsForm({postId}) {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    text: ""
  });

  const handleSubmit = evt => {
    evt.preventDefault();
    console.log('fired')
    dispatch(addCommentToApi({...formData, postId, commentId: uuid()}));
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
          <input className="form-control col-6 m-auto" value={formData.text} type="text" id="text" name="text" onChange={handleChange} />
        </div>
        <input type="submit" value="Submit" className="btn btn-primary" />
      </form>
    </div>
  )
}

export default CommentsForm;