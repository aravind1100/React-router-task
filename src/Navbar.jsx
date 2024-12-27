import React from "react";
import { NavLink} from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="navbar mb-5">
   <NavLink to="/" className="nav-link" > 
  All
</NavLink>
<NavLink to="/full-stack" className="nav-link" > 
  Full Stack Development
</NavLink>
<NavLink to="/data-science" className="nav-link" > 
  Data Science
</NavLink>
<NavLink to="/cyber-security" className="nav-link" > 
  Cyber Security
</NavLink>
<NavLink to="/career" className="nav-link" > 
  Career
</NavLink>
    
  </nav>
  
  );
};

export default Navbar;
