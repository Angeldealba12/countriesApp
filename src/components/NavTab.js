import React from 'react'
import  { Link }  from 'react-router-dom';

const NavTab = () => {
    return (
        <nav>
           <Link to='/'>Countries of the World</Link> 
           <Link to='/search'>Search</Link>
        </nav>
    )
}

export default NavTab