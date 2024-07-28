import { Fragment } from "react";

const AddFeedback = () => {
  return (
    <Fragment>
      <h1 className="text-primary">Add Feedback</h1>
      <div className="card mb-3">
        <div className="card-header bg-body-secondary">
          Add Feedback
        </div>
        <div className="card-body">
          <form>
            <div className="mb-3">
              <label htmlFor="body">Have your say below</label>
              <textarea
                className="form-control"
                id="body"
                placeholder="Your Feedback"
                name="body"
              ></textarea>
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

export default AddFeedback;
