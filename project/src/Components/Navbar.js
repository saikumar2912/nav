import React from 'react'
import '../App.css'
import {Link} from 'react-router-dom';
function Navbar() {
    return (
        <div className="nav">
            <ul className="nav_links">
               <Link to ="/Home" ><li> Home</li> </Link>
                <Link to="/Skill"><li> Skill</li> </Link>
               <Link to="/Post"><li> Post</li> </Link> 
            <Link to="/Login"> <li> Login</li></Link>
            <Link to="/Register"> <li> Register</li></Link>
            </ul>
            </div>
    )
}

export default Navbar
