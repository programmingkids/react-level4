import { Link, Outlet } from "react-router-dom";
import { Nav } from './../blocks/Nav';
import { Title } from './../blocks/Title';

export const Layout = () => {
  return (
    <div className="container">
      <Title><Link to="/">お気に入り動画まとめ</Link></Title>
      <Nav />
      <Outlet />
    </div>
  );
};
