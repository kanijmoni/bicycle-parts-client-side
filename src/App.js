import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/Login/Login';
import Purchase from './Pages/Home/Purchase/Purchase';
import Blogs from './Pages/Blogs/Blogs';
import Register from './Pages/Login/Register';
import MyOrders from './Pages/MyOrders';
import AddAReview from './Pages/AddAReview';
import MyProfile from './Pages/MyProfile';
import AddAProduct from './Pages/AddAProduct';
import MakeAdmin from './Pages/MakeAdmin';
import ManAllOrders from './Pages/ManAllOrders';
import ManageProducts from './Pages/ManageProducts';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/purchase' element={
          <>
            {<Purchase></Purchase>}
          </>}>
        </Route>
        <Route path='/myOrders' element={<MyOrders></MyOrders>}></Route>
        <Route path='/addReview' element={<AddAReview></AddAReview>}></Route>
        <Route path='/myProfile' element={<MyProfile></MyProfile>}></Route>
        <Route path='/addProduct' element={<AddAProduct></AddAProduct>}></Route>
        <Route path='/manageProducts' element={<ManageProducts></ManageProducts>}></Route>
        <Route path='/manageAllOrders' element={<ManAllOrders></ManAllOrders>}></Route>
        <Route path='/makeAdmin' element={<MakeAdmin></MakeAdmin>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div >
  );
}

export default App;
