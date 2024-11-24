import React from 'react';
import './TopHeader.css'; // CSS file for styling
import { useNavigate } from 'react-router-dom';
import { HomeOutlined, MailOutlined, RiseOutlined, RobotFilled } from '@ant-design/icons';
interface DrawerProps {
  open: boolean;
  toggleDrawer: () => void;
}

const items = [
  { name: 'Home', icon: <HomeOutlined />, path: '/home' },
  { name: 'Robot', icon: <RobotFilled />, path: '/robot' },
  { name: 'Email', icon: <MailOutlined />, path: '/email' },
  { name: 'Rank', icon: <RiseOutlined />, path: '/drafts' },
];
const TopHeader: React.FC<DrawerProps> = ({ open, toggleDrawer }) => {
  const navigate = useNavigate();

  const handleItemClick = (index: number) => {
    if (index === 0) {
      navigate("/home");
    }
    if (index !== 0) {
      navigate("/");
    }
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
        </div>
        <ul className="drawer-list">
          {items.map((item, index) => (
            <li key={index} className="drawer-item" onClick={() => handleItemClick(index)}>
                <div className="icon">{item.icon}</div>
                {index === 1 && <div className="divider"></div>}
                {item.name}
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