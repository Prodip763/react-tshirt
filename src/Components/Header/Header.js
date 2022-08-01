import React from "react";
import { Link} from "react-router-dom";
import './Header.css';


const Header = () => {
    return (
        <div>
            <h1>Welcome to my website</h1>
            <h3>It's a T-Shirt Site!!!</h3>
            <nav>
                <Link to='/home'>Home</Link>
                <Link to='/orderReview'>OrderReview</Link>
                <Link to='/grandpa'>Grandpa</Link>
            </nav>
        </div>
    );
};


export default Header;