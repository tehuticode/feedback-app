
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {FaHome, FaPlus, FaQuestion, FaBook} from 'react-icons/fa';

const Header = ({ branding = 'My App' }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-success" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">{branding}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mv-2">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/"><FaHome />Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/add"><FaPlus />Add</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about"><FaQuestion />About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog"><FaBook />Blog</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.propTypes = {
  branding: PropTypes.string,
};

export default Header;

