import React, { useState } from 'react';
import './TopHeader.css'; // CSS file for styling
import { useNavigate } from 'react-router-dom';
import { HomeOutlined, MailOutlined, RiseOutlined, RobotFilled } from '@ant-design/icons';
interface DrawerProps {
  open: boolean;
  toggleDrawer: () => void;
}

const items = [
  { 
    name: 'Home', 
    icon: <HomeOutlined />, 
    path: '/home',
    submenu: null // 没有子菜单
  },
  { 
    name: 'Robot', 
    icon: <RobotFilled />, 
    submenu: [
      { name: 'Robot List', path: '/robots' },
    ]
  },
  { 
    name: 'Email', 
    icon: <MailOutlined />, 
    path: '/email',
    submenu: null // 没有子菜单
  },
  { 
    name: 'Rank', 
    icon: <RiseOutlined />, 
    path: '/drafts',
    submenu: null
  },
];
const TopHeader: React.FC<DrawerProps> = ({ open, toggleDrawer }) => {
  const navigate = useNavigate();

  const [openSubmenu, setOpenSubmenu] = useState<number | null>(null);
  

  const handleSubmenuClick = (
    path: string,
    event: React.MouseEvent<HTMLLIElement>
  ) => {
    event.stopPropagation(); // Prevent the click from propagating to the parent `li`
    navigate(path); // Navigate to the submenu's path
  };

  const handleMenuClick = (index: number, path?: string) => {
    if (path) {
      navigate(path); // 如果有路径，直接跳转
    } else {
      setOpenSubmenu(openSubmenu === index ? null : index); // 展开或关闭子菜单
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
        <ul className="drawer-list">
          {items.map((item, index) => (
            <li key={index}  onClick={() => handleMenuClick(index, item.path)}>
              <div className="drawer-item">
                <div className="icon">{item.icon}</div>
                {item.name}
              </div>

              {/* 子菜单 */}
            {item.submenu && openSubmenu === index && (
              <ul className="submenu">
                {item.submenu.map((subItem, subIndex) => (
                  <li 
                    key={subIndex} 
                    className="submenu-item" 
                    onClick={(event) =>
                      handleSubmenuClick(subItem.path, event)
                    }
                  >
                    {subItem.name}
                  </li>
                ))}
              </ul>
            )}
            </li>
          ))}
          
        </ul>
      </div>
    </div>
  );
};

export default TopHeader;