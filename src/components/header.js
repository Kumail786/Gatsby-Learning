import React from 'react'
import { Link } from 'gatsby'

const Header = ()=>{
return (
    <header>
        <nav>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
            <li>
                <Link to="/blog">Blogs</Link>
            </li>
        </nav>
        
    </header>
)
}

export default Header