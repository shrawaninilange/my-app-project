 // src/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
 import './Sidebar.css'
const Sidebar = () => {
  return (
    <div className="sidebar">

        <div className='dash'>
           <h3>  DASHBOARD</h3>
        </div>
        <div className='dashdiv'>
        <h5 className='dash2'>  DASHBOARD</h5>
        </div>
      <div className='side'>
      
           <div className='div'><Link to="/"> <h4 className='dash3'>Product </h4></Link></div>
        
          <div className='div' > <Link to="/about"><h4 className='dash3'>Customer</h4></Link></div>
          <div className='div'> <Link to="/about"><h4 className='dash3'>Imcome</h4></Link></div>
          <div className='div'> <Link to="/about"><h4 className='dash3'>Promote</h4></Link></div>
          <div className='div'> <Link to="/about"><h4 className='dash3'>Help</h4></Link></div>
      </div>.

      <div className='ent'>
        <h4 className='evo'>Evano </h4>
        
      </div>
    </div>
  );
};

export default Sidebar;
