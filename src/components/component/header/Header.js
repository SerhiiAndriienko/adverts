import { NavLink, Outlet } from 'react-router-dom';
import { Navigation } from './Header.styled';
export default function Header() {
  const handleActiveStyle = ({ isActive }) => {
    return { color: isActive ? '#3470ff' : 'black' };
  };
  return (
    <div>
      <Navigation>
        <NavLink to="/" style={handleActiveStyle}>
          Adverts-cars
        </NavLink>
        <NavLink to="/catalog" style={handleActiveStyle}>
          Catalog
        </NavLink>
        <NavLink to="/favourite" style={handleActiveStyle}>
          Favourite
        </NavLink>
      </Navigation>
      <Outlet></Outlet>
    </div>
  );
}
