import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import css from '../components/styles.module.css';

const Layout = () => {
  return (
    <>
      <header style={css.header}>
        <ul>
          <li>
            <NavLink
              className={css.navLink}
              to="/"
              style={({ isActive }) => ({
                textDecoration: isActive ? 'underline' : 'none',
              })}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={css.navLink}
              to="/movies"
              style={({ isActive }) => ({
                textDecoration: isActive ? 'underline' : 'none',
              })}
            >
              Movies
            </NavLink>
          </li>
        </ul>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
