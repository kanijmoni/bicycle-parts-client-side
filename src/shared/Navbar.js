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
        <div class="navbar bg-success text-white">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-success lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to="/" class="btn bg-gradient-to-r from-accent to-success text-white normal-case text-xl">Bicycle Parts</Link>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;