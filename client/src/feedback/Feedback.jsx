
import { useState } from 'react';
import SingleFeedback from './SingleFeedback';


const Feedback = () => {
  const [feedbackList, setFeedbackList] = useState([
    {
      id: 1,
      body: 'Text goes here',
      userId: 1,
    },
    {
      id: 2,
      body: 'Text goes here',
      userId: 2,
    },
    {
      id: 3,
      body: 'Text goes here',
      userId: 3,
    },
  ]);

  return (
    <div className='mt-3'>
      <h1> Feedback</h1>
        {
          feedbackList.map(feedback => (
          <SingleFeedback key={feedback.id} feedback={feedback} />
          ))
        }

    </div>
  );
}

export default Feedback;

