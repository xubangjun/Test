import React from 'react'
import Content from '../../view/sandbox/Content'
import './Home.css'; 
interface DrawerProps {
  open: boolean;
  toggleDrawer: () => void;
}
const Home: React.FC<DrawerProps> = ({ open, toggleDrawer }) => {
  return (
    <div className={`main-content1 ${open ? 'shifted' : ''}`}>
      <Content></Content>
  </div>

  );
};
export default Home