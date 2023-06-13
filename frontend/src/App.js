import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Layouts/Home';
import MantabaSearch from './Layouts/mantabaSearch';
import AboutMain from './Layouts/Main/AboutMain'
import Navbar from './Layouts/Navbar';
import Footer from './Layouts/Footer';
import Service from './Layouts/Service/Service';
import About from './Layouts/About/About';
import Contact from './Layouts/Contact';
import AboutDetails from './Layouts/About/AboutDetails';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ServiceDetails from './Layouts/Service/ServiceDetails';
import MainDetails from './Layouts/Main/MainDetails';
import ReviewMain from './Layouts/Main/ReviewMain';
import ProjectsMain from './Layouts/Main/ProjectsMain';
import SeatsMain from './Layouts/Main/SeatsMain';
import Admin from './Layouts/Admin';


function App() {
  return (
   <Router>
    <Navbar />
    <ToastContainer theme='dark' />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home/:id' element={<MainDetails />} />
          <Route path='/home/seats' element={<SeatsMain />} />
          <Route path='/home/projects' element={<ProjectsMain />} />
          <Route path='/home/about' element={<AboutMain />} />
          <Route path='/home/review' element={<ReviewMain />} />
          <Route path='/service' element={<Service />} />
          <Route path='/service/:id' element={<ServiceDetails />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/search/:keyword' element={<MantabaSearch />} />
          <Route path='/about/:id' element={<AboutDetails />} />
          <Route path='/admin' element={<Admin />} />

         </Routes>
         <Footer />
      
   </Router>
    
  );
}
export default App;
