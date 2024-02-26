import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home1 from './components/Home1';

import About from './components/About'
import Login from './components/Login' 
import SignUp from './components/SignUp'
import Pages from './components/Pages' 
import Footer from './components/Footer'; 
import Courses from './components/Courses' 
import ContactUs from './components/ContactUs';


const App = () => (
  <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<Home1 />} />  
    <Route exact path="/about" element={<About/>} /> 
    <Route exact path="/login" element={<Login/>}/> 
    <Route exact path="/Signup" element={<SignUp/>}/> 
    <Route exact path="/page" element={<Pages/>}/>  
    <Route exact path="/foot" element={<Footer/>}/>  
    <Route exact path="/courses" element={<Courses/>}/> 
    <Route exact path="/contactus" element={<ContactUs/>}/>
   
    </Routes>
  </BrowserRouter>
)

export default App
