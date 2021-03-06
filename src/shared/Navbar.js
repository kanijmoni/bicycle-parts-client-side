import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
    }

    const menuItems = <>
        <li><Link to="/">Home</Link></li>

        {
            user && <>
                <li><Link to="/manageAllOrders">Manage All Orders</Link></li>
                <li><Link to="/addProduct">Add a Product</Link></li>
                <li><Link to="/makeAdmin">Make Admin</Link></li>
                <li><Link to="/manageProducts">Manage Products</Link></li>
            </>
        }
        {
            user && <>
                <li><Link to="/dashboard">Dashboard</Link></li>
            </>
        }

        <li><Link to="/blogs">Blogs</Link></li>
        <li><Link to="/about">About</Link></li>
        <li>{user ? <button className='btn btn-ghost' onClick={logout}>Signout</button> : <Link to="/login">Login</Link>}</li>
    </>

    return (
        <div className="navbar bg-success text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-success lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to="/" className="btn bg-gradient-to-r from-accent to-success text-white normal-case text-xl">Bicycle Parts</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className='navber-end'>
                <label tabIndex="1" for="dashboard-sidebar" className="btn btn-success lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <label class="btn btn-primary drawer-button lg:hidden">abc</label>
            </div>
        </div>
    );
};

export default Navbar;