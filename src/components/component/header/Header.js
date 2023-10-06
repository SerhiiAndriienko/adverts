import { NavLink, Outlet } from 'react-router-dom';
import { Navigation } from './Header.styled';

export default function Header() {
  const handleActiveStyle = ({ isActive }) => {
    return { color: isActive ? 'red' : 'black' };
  };
  return (
    <header>
      <Navigation>
        <NavLink to="/" style={handleActiveStyle}>
          Home
        </NavLink>
        <NavLink to="/cars" style={handleActiveStyle}>
          Cars
        </NavLink>
        <NavLink to="/favourite" style={handleActiveStyle}>
          Favourite
        </NavLink>
      </Navigation>
      <Outlet></Outlet>
    </header>
  );
}
