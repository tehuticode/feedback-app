import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaTimes, FaPencilAlt } from 'react-icons/fa';
import Joy from '../assets/Joy-c.jpg';

const SingleFeedback = (props) => {
  console.log(props);

  const onDelete = (e, id) => {
    console.log("Delete Clicked");
    console.log(`Id Clicked: ${id}`);
    props.handleDelete(id);
  }
  const { body } = props.feedback;
  return (
    <div className='card card-body mb-3'>
      <div className='row'>
        <div className='col-3 border border-success'> 
          <img 
            className='img-fluid pt-2' 
            src={Joy} 
            alt='Joy' 
            style={{ maxWidth: '200px', borderRadius: '50%' }}
          /> 
          <p>Joy</p>
        </div>
        <div className='col-6 border border-primary pt-3'>
          {props.feedback.body}
        </div>
        <div className='col-2 border border-success fs-1 pt-3'>
          <FaTimes 
            onClick={e => onDelete(e, props.feedback.id)}
            style={{
              cursor: 'pointer', 
              float: 'right', 
              color: 'red', 
              marginLeft: '10px'
            }}
          />
          <Link to={`/edit/${id}`}>
          <FaPencilAlt 
            className='text-primary' 
            style={{ cursor: 'pointer', float: 'right' }}
          />
          </Link>
        </div>
      </div>
    </div>
  )
}

SingleFeedback.propTypes = {
  feedback: PropTypes.object,
  handleDelete: PropTypes.func,
}

export default SingleFeedback;
