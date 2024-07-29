import { Fragment, useState } from "react";
import { useParams } from "react-router-dom";

const EditFeedback = (props) => {
  const [formData, setFormData ] = useState({
    id: 4,
    body: '',
    userId: 1
  });

  const { id, body, userId} = formData;
  const onChange = e => {
    setFormData({
      ...formData, [e.target.name]: e.target.value
    });
  }
  const onSubmit = e => {
    e.preventDefault();
    console.log('OnSubmit (Add) is running...');

    //client side validation
  const newFeedback = {
      id,
      body,
      userId
    }
    console.log(newFeedback);

    

  }
  return (
    <Fragment>
      <h1 className="text-primary">Add Feedback</h1>
      <div className="card mb-3">
        <div className="card-header bg-body-secondary">
          Add Feedback
        </div>
        <div className="card-body">
          <form onSubmit={e => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="body">Have your say below</label>
              <textarea
                className="form-control"
                id="body"
                placeholder="Your Feedback"
                name="body"
                //value={body}
                //onChange={e => onChange(e)}
              >
              </textarea>
            </div>
            <div className="d-grid gap-2">
              <input type="submit" value="Add Feedback" className="btn btn-success"/>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
}

export default EditFeedback;
