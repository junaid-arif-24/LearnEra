import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './components/Home'
import Navigation from './components/Navigation';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Footer from './components/Footer';
import Courses from './components/Courses';
import AddCourse from './components/AddCourse';
import UpdateCourse from './components/UpdateCourse';
import CourseDetail from './components/CourseDetail';

function App() {
  return <>
    <Router>
    <Navigation/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<SignUp />}/>
        <Route path='/signin' element={<SignIn />}/>
        <Route path='/courses' element={<Courses />}/>
        <Route path='/add' element={<AddCourse />}/>
        <Route path='/UpdateCourse/:courseId' element={<UpdateCourse />}/>
        <Route path='/courses/:courseId' element={<CourseDetail />}/>
      </Routes>
      <Footer/>
    </Router>
  </>
}

export default App
