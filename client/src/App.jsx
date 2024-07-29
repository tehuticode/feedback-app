
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './layout/Header';
import Footer from './layout/Footer';
import About from './pages/About';
import Feedback from './feedback/Feedback';
import AddFeedback from './feedback/AddFeedback';
import EditFeedback from './feedback/EditFeedback';

import Blog from './pages/Blog';


function App() {
  return (
    <Router>
      <Header branding='FeedbackApp' />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Feedback />} />
          <Route path='about' element={<About />} />
          <Route path='add' element={<AddFeedback />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/edit:id' element={<EditFeedback />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;

