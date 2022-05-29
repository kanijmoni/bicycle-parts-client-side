
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/ExtraPages/About';
import AddAProduct from './Pages/ExtraPages/AddAProduct';
import AddAReview from './Pages/ExtraPages/AddAReview';
import Blogs from './Pages/ExtraPages/Blogs';
import MakeAdmin from './Pages/ExtraPages/MakeAdmin';
import ManageProducts from './Pages/ExtraPages/ManageProducts';
import ManAllOrders from './Pages/ExtraPages/ManAllOrders';
import MyOrders from './Pages/ExtraPages/MyOrders';
import MyProfile from './Pages/ExtraPages/MyProfile';
import NotFound from './Pages/ExtraPages/NotFound';
import Purchase from './Pages/HiddenPages/Purchase';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import Footer from './shared/Footer';
import Navbar from './shared/Navbar';

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
      <Footer></Footer>
    </div>
  );
}

export default App;
