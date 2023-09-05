import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './components/Home'
import Navigation from './components/Navigation';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Footer from './components/Footer';
import Courses from './components/Courses';
import CourseDetail from './components/CourseDetail';
import PurchasedCourses from './components/PurchasedCourses';

function App() {
  return <>
    <Router>
    <Navigation/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<SignUp />}/>
        <Route path='/signin' element={<SignIn />}/>
        <Route path='/courses' element={<Courses />}/>
        <Route path='/purchase' element={<PurchasedCourses />}/>
        <Route path='/courses/:courseId' element={<CourseDetail />}/>
      </Routes>
      <Footer/>
    </Router>
  </>
}

export default App
