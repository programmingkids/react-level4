import { Outlet } from 'react-router-dom';
import { Nav } from './../blocks/Nav';

export const Layout = (props) => {
  return (
    <div className="container">
      <Nav />
      <Outlet />
    </div>
  );
};
