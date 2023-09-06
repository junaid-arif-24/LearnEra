import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './components/Home'
import Navigation from './components/Navigation';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Footer from './components/Footer';
import Courses from './components/Courses';
import CourseDetail from './components/CourseDetail';
import PurchasedCourses from './components/PurchasedCourses';
// import { BASE_URL } from './config';
// import { useRecoilState } from 'recoil';
// import { userState } from './store/atoms/userAtom';
function App() {
  return <>
    <Router>
    <Navigation/>
    {/* <InitUser/> */}
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
// function InitUser() {
//   const [user,setUser] = useRecoilState(userState);
//   const init = async() => {
//       try {
//           const response = await axios.get(`${BASE_URL}/admin/me`, {
//               headers: {
//                   "Authorization": "Bearer " + localStorage.getItem("token")
//               }
//           })

//           if (response.data.username) {
//               setUser({
//                   isLoggedIn: true,
//                   userEmail: response.data.username
//               })
//           } else {
//               setUser({
//                   isLoading: false,
//                   userEmail: null
//               })
//           }
//       } catch (e) {

//           setUser({
//               isLoading: false,
//               userEmail: null
//           })
//       }
//   };

//   useEffect(() => {
//       init();
//   }, []);

//   return <></>
// }
export default App
