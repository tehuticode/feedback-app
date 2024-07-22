
const AddFeedback = () => {
  return (
    <div>
      <h2>Add Feedback</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="feedback" className="form-label">Feedback</label>
          <input type="text" className="form-control" id="feedback" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default AddFeedback;

