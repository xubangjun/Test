import React, { useState } from 'react';
import './TopHeader.css'; // CSS file for styling
interface DrawerProps {
  open: boolean;
  toggleDrawer: () => void;
}
const TopHeader: React.FC<DrawerProps> = ({ open, toggleDrawer }) => {

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
        </div>
        <ul className="drawer-list">
          {['Home', 'Starred', 'Send email', 'Drafts'].map((item, index) => (
            <li key={index} className="drawer-item">
              {index === 0 ?<div style={{ marginRight: '15px' }}>Home</div>: null}
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content Area */}
      <div className={`main-content ${open ? 'shifted' : ''}`}>
        <p>This is some sample content.</p>
      </div>
    </div>
  );
};

export default TopHeader;