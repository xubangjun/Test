import React, { useState } from 'react';
import './TopHeader.css'; // CSS file for styling
import Content from '../../view/sandbox/Content';
const TopHeader = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div className="app">
      {/* App Bar */}
      <div className="app-bar">
        <button className="menu-button" onClick={toggleDrawer}>
          &#9776; {/* Hamburger Menu */}
        </button>
        <h1>BANGJUN.COM</h1>
      </div>

      {/* Sidebar Drawer */}
      <div className={`drawer ${open ? 'open' : ''}`}>
        <div className="drawer-header">
          <button className="close-button" onClick={toggleDrawer}>
            &#10005; {/* Close Icon */}
          </button>
        </div>
        <ul className="drawer-list">
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((item, index) => (
            <li key={index} className="drawer-item">
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content Area */}
      <div className={`main-content ${open ? 'shifted' : ''}`}>
        <Content />
        <p>This is some sample content.</p>
      </div>
    </div>
  );
};

export default TopHeader;