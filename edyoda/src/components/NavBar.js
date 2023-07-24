import React, { useState } from 'react';
import "../styles/NavBar.css";

export default function NavBar() {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
      setShowDropdown((prev) => !prev);
      if(showDropdown2)
      setShowDropdown2((prev) => !prev);
    };
    const [showDropdown2, setShowDropdown2] = useState(false);

    const toggleDropdown2 = () => {
      setShowDropdown2((prev) => !prev);
      if(showDropdown)
      setShowDropdown((prev) => !prev);
    };
  return (
    <div className='main'>
        <div className='left-content'>
            <div className='logo'>EDYOD</div>
            <div className='nav-button' onClick={toggleDropdown}>
                Courses
                <img src="../img/IconChevronDown.png" alt="SearchIcon" />
        {showDropdown && (
            <div className='dropdown-content' style={{ position: 'relative'}}>
            <div>Option 1</div>
            <div>Option 2</div>
            <div>Option 3</div>
          </div>
        )}
            </div>
            <div className='nav-button'  onClick={toggleDropdown2}>
                Programs
                <img src="../img/IconChevronDown.png" alt="SearchIcon" />
                {showDropdown2 && (
            <div className='dropdown-content' style={{ position: 'relative'}}>
            <div>Option 1</div>
            <div>Option 2</div>
            <div>Option 3</div>
          </div>
        )}
            </div>
        </div>
        
            {/* <img src="../img/SearchIcon.png" alt="Search Icon"/> */}
        <div className='right-content'>
            <div className='nav-search'>
            <img src="../img/SearchIcon.png" alt="SearchIcon" />
            </div>
            <div className='nav-login'>Log in</div>
            <div className='nav-join-now-back'>
            <div className='nav-join-now'>join now</div>
            </div>
        </div>
    </div>
    )
}
