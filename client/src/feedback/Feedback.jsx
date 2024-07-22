
import { useState } from 'react';

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
    <div className='container mt-3'>
      {feedbackList.map(feedback => (
        <div key={feedback.id} className='card card-body mb-3'>
          <p>{feedback.body}</p>
        </div>
      ))}
         </div>
  );
}

export default Feedback;

