import PropTypes from 'prop-types'

const SingleFeedback = props => {
  return (
    <div className='card card-body mb-3'>
      {props.feedback.body}
    </div>
  )
}

SingleFeedback.propTypes = {
  feedback: PropTypes.object,
}

export default SingleFeedback
