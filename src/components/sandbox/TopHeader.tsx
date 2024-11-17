import React from "react";
import "./TopHeader.css";

const TopHeader: React.FC = () => {
  return (
    <header className="header">
      <div className="menu-icon">☰</div>
      <div className="logo">BANGJUN</div>
      <div className="search-box">
        <input type="text" placeholder="Search..." className="search-input" />
      </div>
      <div className="actions">
        <div className="icon">
          <span className="badge">4</span>
          📧
        </div>
        <div className="icon">
          <span className="badge">17</span>
          🔔
        </div>
        <div className="icon">👤</div>
      </div>
    </header>
  );
};

export default TopHeader;