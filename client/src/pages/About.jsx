
import missionImage from '../assets/mission.jpg';
import visionImage from '../assets/vision.jpg';
import valuesImage from '../assets/value.jpg';

const About = () => {
  return (
    <div className="about-container">
      <div className="jumbotron text-center">
        <h1 className="display-4">About Us</h1>
        <p className="lead">We are dedicated to providing the best feedback experience.</p>
        <hr className="my-4" />
        <p>Our mission is to collect and utilize user feedback to continuously improve our products and services.</p>
      </div>

      <div className="row mt-5">
        <div className="col-md-4">
          <div className="card">
            <img src={missionImage} className="card-img-top" alt="Mission" />
            <div className="card-body">
              <h5 className="card-title">Our Mission</h5>
              <p className="card-text">To innovate and lead in the feedback industry.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src={visionImage} className="card-img-top" alt="Vision" />
            <div className="card-body">
              <h5 className="card-title">Our Vision</h5>
              <p className="card-text">To be the most trusted feedback platform worldwide.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src={valuesImage} className="card-img-top" alt="Values" />
            <div className="card-body">
              <h5 className="card-title">Our Values</h5>
              <p className="card-text">Integrity, Innovation, and Excellence.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

