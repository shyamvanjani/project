import NavBar from './components/NavBar';
import Job from './components/Job';
import Blogs from './components/Blogs';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Home from './components/Home';
import SignUp from './components/SignUp';
import LogOut from './components/LogOut';


function App() {
  return (
    <>
    <Router>
      <NavBar/>
      <Routes>
          <Route path="/" element = {<Home></Home>}>
          </Route>
          <Route path="/jobs" element={<Job></Job>}>
          </Route>
          <Route path="/blog" element ={<Blogs></Blogs>}>
          </Route>
          <Route path="/about" element={<AboutUs></AboutUs>}>
          </Route>
          <Route path="/contact" element={<ContactUs></ContactUs>}>
          </Route>
          <Route path="/login" element={<SignUp/>}></Route>
          <Route path="/logout" element={<LogOut/>}></Route>
        </Routes>
        </Router>
     
    </>

  );
}

export default App;
