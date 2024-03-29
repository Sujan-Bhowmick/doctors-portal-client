
import { Route, Routes } from 'react-router-dom';
import Appointment from './Pages/Appoinment/Appointment';
import About from "./Pages/About/About"
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import SignUp from './Pages/Login/SignUp';
import Navbar from './Pages/Shared/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppoinment from './Pages/Dashboard/MyAppoinment';
import MyReview from './Pages/Dashboard/MyReview';
import MyHistory from './Pages/Dashboard/MyHistory';
import Users from './Pages/Dashboard/Users';
import AdDoctor from './Pages/Dashboard/AdDoctor';
import RequireAdmin from './Pages/Login/RequireAdmin';
import ManageDoctor from './Pages/Dashboard/ManageDoctor';
import Payment from './Pages/Dashboard/Payment';
import Contacts from './Pages/Home/Contact/Contacts';
import Testimonials from './Pages/Home/Testimonials/Testimonials';
import Doctors from './Pages/Home/Doctor/Doctors';
import Blogs from './Pages/Blogs/Blogs';

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}> </Route>
        <Route path='/home' element={<Home></Home>}> </Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/doctors' element={<Doctors></Doctors>}></Route>
        <Route path='/contact' element={<Contacts></Contacts>}></Route>
        <Route path='/reviews' element={<Testimonials></Testimonials>}></Route>
        <Route path= '/blog' element= {<Blogs></Blogs>}></Route>
        <Route path='/appointment' element={
          <RequireAuth>
            <Appointment></Appointment>
          </RequireAuth>}></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>}>
            <Route index element = {<MyAppoinment></MyAppoinment>}></Route>
            <Route path='review' element = {<MyReview></MyReview>}></Route>
            <Route path='history' element = {<MyHistory></MyHistory>}></Route>
            <Route path='payment/:id' element = {<Payment></Payment>}></Route>
            <Route path='users' element = {<RequireAdmin><Users></Users></RequireAdmin>}></Route>
            <Route path='addDoctor' element = {<RequireAdmin><AdDoctor></AdDoctor></RequireAdmin>}></Route>
            <Route path='manageDoctor' element = {<RequireAdmin><ManageDoctor></ManageDoctor></RequireAdmin>}></Route>
          </Route>

        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
