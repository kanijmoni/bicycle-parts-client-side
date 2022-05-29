import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const menuItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/myOrders">My Orders</Link></li>
        <li><Link to="/addReview">Add a review</Link></li>
        <li><Link to="/myProfile">My Profile</Link></li>
        <li><Link to="/manageAllOrders">Manage All Orders</Link></li>
        <li><Link to="/addProduct">Add a Product</Link></li>
        <li><Link to="/makeAdmin">Make Admin</Link></li>
        <li><Link to="/manageProducts">Manage Products</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/login">Login</Link></li>
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
        </div>
    );
};

export default Navbar;