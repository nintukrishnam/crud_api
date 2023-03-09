import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../img/logo.png"
import { AuthContext } from "../context/authContext";
import { useContext } from "react";

const Navbar = () => {

    const { currentUser,logout } = useContext(AuthContext);


    return (
        <div className="navbar">
            <div className="container">
                <div className="logo">
                    <Link to="/">
                    <img src={Logo} alt="" />
                    </Link>
                </div>
                <div className='links'>
                    <Link className='link' to="/?cat=art">
                        <h6>ART</h6>
                    </Link>
                    <Link className='link' to="/?cat=technology">
                        <h6>TECHNOLOGY</h6>
                    </Link>
                    <Link className='link' to="/?cat=food">
                        <h6>FOOD</h6>
                    </Link>
                    <Link className='link' to="/?cat=story">
                        <h6>STORY</h6>
                    </Link>
                    <span>{currentUser?.username}</span>
                    {currentUser ? 
                    <span onClick={logout}>Logout</span> : 
                        <Link className='link' to="/login"></Link>}
                    <span className="write">
                        <Link className="link" to="/write">
                            Post
                        </Link>
                    </span>
                </div>

            </div>
        </div>
    )
}

export default Navbar